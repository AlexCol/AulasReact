//!outro exemplo de uso de reduce está em hooks e context com nome de TitleColor

import { ReactNode, createContext, useReducer } from "react";

//+ 1 criando a interface a ser usada no contexto;
interface IValueState {
    value: number;
};

//+ 2 criando a ação, definindo valores fixos
interface IValueAction { 
    type: "up" | "down"; //+definir as ações disponiveis
};


//+ 3 criando a função 'reducer', que é quem vai mudar o estado (o valor)
function upAndDownReducer (state:IValueState, action: IValueAction) {
    switch(action.type) {
        case "up":
            return {...state, value: state.value + 1};
        case "down":
            return {...state, value: state.value - 1};
        default:
            return state;            
    }
}

//+ 4 criando o contexto, para exportação e uso externo (mantendo os valores)
interface IValueContext extends IValueState { //! 4.1 primeiro criando uma interface para poder adicionar a função de dispacth
    dispatch: React.Dispatch<IValueAction>;
}
//! 4.2 então criando o contexto passando a tipagem criada
export const UpAndDownContext = createContext<IValueContext>({value: 0, dispatch: () => {}}); //! 4.3 passando um valor inicial, mas não importa a função em branco, pois será substituida

//+ 5 criando o provider, para 'empacotar' outras telas
export const UpAndDownContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(upAndDownReducer, {value: 0});   
    return (
        <UpAndDownContext.Provider value={{...state, dispatch}}>
        {children}
        </UpAndDownContext.Provider>
    );    
}

//+ 6 criado então o 'useUpAndDown', será feito em outro arquivo, pois é ele quem será exportado (e realiza a validação se o contexto é valido)
//+!continuar no arquivo useUpAndDown
