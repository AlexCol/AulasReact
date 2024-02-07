import { useState } from "react";

function HookUseState() {
    // 1 - use state
    let userName = "João";
    const [name, setName] = useState('Alex');    
    let nome3:string = name;

    //2 - useState e inputs
    const [age, setAge] = useState<number>(18);

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
        <form action="">
            <label htmlFor="age">
                <input 
                    id="age"                    
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
            </label>
            <p>Você tem: {age} ano{age === 1 ? '' : 's'}.</p>
        </form>
    </>)

}
export default HookUseState