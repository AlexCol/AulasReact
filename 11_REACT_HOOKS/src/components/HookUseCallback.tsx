import { useCallback, useState } from "react"
import List from "./List";

function HookUseCallback() {
    const [counter, setCounter] = useState(0);
    
    const getItensFromDataBase = useCallback(() => {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }, []) //o que precisa mudar pra essa função ser executada novamente
    return (
    <div>
        <h2>UseCallback</h2>
        <button onClick={() => setCounter(counter+1)}>Alterar!</button>
        <p>{counter}</p>
        <List getItens={getItensFromDataBase} />
        <hr />
    </div>
  )
}
export default HookUseCallback