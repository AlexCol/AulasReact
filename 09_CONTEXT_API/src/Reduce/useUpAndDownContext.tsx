import { useContext } from "react";
import { UpAndDownContext } from "./UpAndDownContext";

export const useUpAndDownContext = () => {
    //+ 7 realizada criação do contexto, com uma validação (valida se o provider dela exite e abraça os componentes que a chamam)
    const context = useContext(UpAndDownContext);
    if (!context) {
        console.log("Contexto não encontrado!");
    }
    return context;
}

//+ 8 por fim, tem que colocar o provider onde ela vai ser usada, no caso desse exemplo, no arquivo main.tsx
//!olhando no arquivo pode-se ver como foi montado
//!e posteriormente na pagina about o chamo