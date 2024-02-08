import { useEffect, useState } from "react"

function HookUseEffect() {
    const [number, setNumber] = useState(0);
    const [anotherNumber, setAnotherNumber] = useState(0);
    
    useEffect(() => {
        console.log("sem um array de dependencias, serei executado sempre que o componente renderizar");
    });
    useEffect(() => {
        console.log("estou sendo executado, e serei executado somente quando renderizar pela primeira vez");
    }, []);
    useEffect(() => {
        console.log(`sou executado sempre que minha dependencia, "number", mudar`);
    }, [number]);   
    
    // 4 -- cleanup
    // useEffect(() => {        
    //     const timer = setTimeout(() => {
    //         console.log("executando useEffect do timeout");
    //         //setAnotherNumber(anotherNumber+1);
    //         //console.log(anotherNumber+1);
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, [anotherNumber])

    
    return (
        <div>
            <h2>useEffect</h2>
            <button onClick={() => setNumber(number+1)}>Number: {number}</button>
            <button onClick={() => setAnotherNumber(anotherNumber+1)}>Another Number: {anotherNumber}</button>
            <hr />
        </div>
    )
}
export default HookUseEffect;