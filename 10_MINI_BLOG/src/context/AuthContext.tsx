import { User } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useAuthentication } from "../Hooks/useAuthentication";

export const AuthContext = createContext<User|null|undefined>(null);

export function AuthProvider(    
    { children, value }: { children: ReactNode, value: User|null|undefined } 
) {
    const {logout} = useAuthentication();
    
    //+realizar ultima ação antes de fechar, realizar o logout papra limpeza de tokens
    useEffect(() => {
        window.onbeforeunload = function() {
            logout();
            return;
          }
      }, []);
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext);
}