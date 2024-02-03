import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/config";
import { IDocument } from "../Interfaces/IDocument";


export const useFetchDocuments = (docCollection:string, search?:string|null, uid?:string|undefined) => {
    const [documents, setDocuments] = useState<IDocument[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // deal with memory leak
    const [cancelled, setCancelled] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            if(cancelled) return;
            
            setLoading(true);
            const collectionRef = await collection(db, docCollection);
            try {
                let q;
                
                if (uid) {
                    q = await query(collectionRef, where("uid", "==", uid), orderBy("createdAt", "desc"));
                } else if (search) { //home com search
                    q = await query(collectionRef, where("tags", "array-contains", search), orderBy("createdAt", "desc"));
                } else { //home sem search                    
                    q = await query(collectionRef, orderBy("createdAt", "desc"));
                }
                
                await onSnapshot(q, (querySnapshot): void => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id, 
                            ...doc.data()
                        } as IDocument))
                    );
                });
            } catch (error: any) {
                console.log(error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }            
        }
        
        loadData();
    }, [docCollection, search, uid, cancelled]);


    
    // const checkCancelBeforeDispatch = (action: ITitleAction) => {
    //     if (!cancelled) dispatch(action);
    // }
    useEffect(() => {
        setCancelled(false);
        return () => {
            setCancelled(true);
        }
    }, []);

    return {documents, loading, error};
}