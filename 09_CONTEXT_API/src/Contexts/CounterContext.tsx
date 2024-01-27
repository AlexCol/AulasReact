import { ReactNode, createContext, useState } from "react";

//+ 1- Criar Contexto {para que suporte o valor, mais seu set, precisam estar encapsulados numa interface - devido ao typescript}
interface ICounterContext {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}
export const CounterContext = createContext<ICounterContext|null>(null);


//+ 2 - Criar provider
export const CounterContextProvider = ({ children }: { children: ReactNode }) => {
    const [counter, setCounter] = useState<number>(0);

    const contextValue: ICounterContext = {
        value: counter,
        setValue: setCounter
    };

    return (
        <CounterContext.Provider value={contextValue}>
            {children}
        </CounterContext.Provider>
    );
};
