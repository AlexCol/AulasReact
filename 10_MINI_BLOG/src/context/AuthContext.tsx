import { User } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useAuthentication } from "../Hooks/useAuthentication";
import Cookies from 'js-cookie';

export const AuthContext = createContext<User|null|undefined>(null);

export function AuthProvider(    
    { children, value }: { children: ReactNode, value: User|null|undefined } 
) {
    const {logout} = useAuthentication();

    //+realizar contagem de paginas abertas, se fechar todas, dar logout    
    //!metodo usando cookies
    useEffect(() => {
        let numSessions = parseInt(Cookies.get('sessions') || '0', 10) + 1;
        Cookies.set('sessions', numSessions.toString());
        console.log(numSessions);
    
        const handleTabClose = () => {
          let numSessions = parseInt(Cookies.get('sessions') || '0', 10) - 1;
          Cookies.set('sessions', numSessions.toString());
          console.log(numSessions);
          if (numSessions <= 0) {
            logout();
            Cookies.set('sessions', '0');
          }
        };
    
        window.onunload = handleTabClose;
        return () => {
          handleTabClose();
        };
      }, []);
    
    
    //!modo usando localstorage
    // useEffect(() => {
    //     let numSessions = parseInt(localStorage.getItem("sessions")||"0") + 1;
    //     localStorage.setItem('sessions', numSessions.toString());
    //     console.log(numSessions)

    //     const handleTabClose = () => {            
    //         let numSessions = parseInt(localStorage.getItem("sessions")||"0") - 1;
    //         localStorage.setItem('sessions', numSessions.toString());
    //         console.log(numSessions)
    //         if (numSessions <= 0) {
    //             logout();
    //             localStorage.setItem('sessions', "0");
    //         } 
    //     };
    //     window.onunload = handleTabClose; //pra quando fechar a janela (ele não chama o return, de desmontar o componente)
    //     return () => {
    //         handleTabClose(); //pra quando desmontar o componente (não é chamado o 'onunload' ao dar refresh, mas sim o desmontar o compomente)
    //     }
    // }, []);
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext);
}