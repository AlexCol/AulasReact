import { useContext } from "react"
import { CounterContext } from "../../Contexts/CounterContext"
import { useUpAndDownContext } from "../../Reduce/useUpAndDownContext"

const About = () => {
  const counter = useContext(CounterContext)
  const {value, dispatch} = useUpAndDownContext();

  return (
    <div>
        <h1>About</h1>
        <h2>O valor no contexto é: "{counter?.value}" - Estamos em About</h2>
        <h3>O valor de upAndDown é: {value}</h3>
        <div>
          <button onClick={() => dispatch({type: "up"})}>Aumentar</button>
          <button onClick={() => dispatch({type: "down"})}>Diminuir</button>
        </div>
    </div>
  )
}

export default About