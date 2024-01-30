import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"
import { IUser } from "../Interfaces/IUser";
import { app } from "../firebase/config";

export const useAuthentication = () => {
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState<boolean>(false);

    const auth = getAuth(app);

    function checkIfIsCancelled() {
        if(cancelled) {
            return;
        }
    }

    const createUser = async (data:IUser) => {
        checkIfIsCancelled();
        setError('');
        setLoading(true);

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);
            return user;
        } catch (e:any) {
            let errorMessage:string = e.message;
            if (errorMessage.toLowerCase().includes("password")) {
                setError("Senha invalida. Deve conter 6 ou mais digitos.");
                
            } else if (errorMessage.toLowerCase().includes("email-already-in-use")) {
                setError("Email já em uso.");
                
            } else {
                setError(errorMessage);
            }
            setLoading(false);
        }        
    }

    useEffect(() =>
        () => {
            return setCancelled(true);
        }
    , []);

    return {
        auth,
        createUser,
        error,
        loading
    }
}   

