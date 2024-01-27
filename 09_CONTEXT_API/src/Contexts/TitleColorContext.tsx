import { ReactNode, createContext, useReducer} from "react";

//+ 1 criando a interface a ser usada no contexto;
interface ITitleColorSate {
    color: string;
};

//+ 2 criando o contexto, usando a interface para sua tipagem
export const TitleColorContext = createContext<any>({color: ""});

/*
!pra tipar o contexto
interface ITitleColorContext extends ITitleColorState {
    dispatch: React.Dispatch<ITitleAction>;
}

export const TitleColorContext = createContext<ITitleColorContext>({
    color: "",
    dispatch: () => {} // Pode ser uma função vazia, pois será substituída quando o provider for usado.
});


*/

//+ 3 criando a ação, definindo valores fixos
interface ITitleAction { 
    type: string; //+definir as ações disponiveis
};

//+ 4 criando a função 'reducer', que é quem vai mudar o estado (a cor)
function titleColorReducer (state:ITitleColorSate, action: ITitleAction) {
    let color;
    switch(action.type) {
        case "BLUE":
            color = "blue";
            break;
        case "RED":
            color = "red";
            break;
        case "PURPLE":
            color = "purple";
            break;
        default:
            return state;            
    }
    return {...state, color};
}

//+ 5 criando o provider
export const TitleColorContextProvider = ({ children }: { children: ReactNode }) => {
    //+ o state é a 'variavel', dispatch é quem é 'despachado' para executar o ajute
    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});

    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
        {children}
        </TitleColorContext.Provider>
    );
}





/*
    https://www.youtube.com/watch?v=QFmndUkUYn0&ab_channel=Jo%C3%A3oBibiano
*/