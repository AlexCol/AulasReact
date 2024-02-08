import { ReactNode, createContext, useState } from "react";

type Logado = boolean;

interface ISomeContext {
    logado: Logado;
    alterarStatus: () => void;
}

export const SomeContext = createContext<ISomeContext>({logado: false, alterarStatus() {}});

interface IHookUseContextProps {
    children: ReactNode
};

export const HookUseContext = ({children}: IHookUseContextProps) => {
    const[logado, setLogado] = useState<boolean>(true);
    function alterarStatus(): void {
        setLogado((logadoAtual) => !logadoAtual);
    }

    return (
        <SomeContext.Provider value={{logado, alterarStatus}}>
            {children}
        </SomeContext.Provider>
    )
}

/*
1 - criado componente, acima
2 - abraçado onde ele será usado, nesse caso foi no arquivo app
3 - usndo ele então na HOME
*/