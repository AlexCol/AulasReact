import { User } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useAuthentication } from "../Hooks/useAuthentication";

export const AuthContext = createContext<User|null|undefined>(null);

export function AuthProvider(    
    { children, value }: { children: ReactNode, value: User|null|undefined } 
) {
    const {logout} = useAuthentication();
    
    //+realizar ultima ação antes de fechar, realizar o logout papra limpeza de tokens
  // Tipando o 'event' como BeforeUnloadEvent
    useEffect(() => {
        const handleTabClose = (event: Event) => {
            event.preventDefault();
            logout();
        };
        window.addEventListener("unload", handleTabClose);

        return () => {
        window.removeEventListener("unload", handleTabClose);
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