import { useState } from "react";

function HookUseState() {
    // 1 - use state
    let userName = "João";
    const [name, setName] = useState('Alex');    
    let nome3:string = name;

    const changeNames = () => {
        userName = "João Souza";
        setName("Alex Coletti");
    }
    
    return (<>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <p>Name3: {nome3}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        <hr />
    </>)

}
export default HookUseState