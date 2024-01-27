import { useCounterContext } from "../../Hook/useCounterContext"

const Contact = () => {
  const context = useCounterContext();
  return (
    <div>
        <h1>Contact</h1>
        <h2>O valor no contexto é: "{context?.value}" - Estamos em About - usando hook como context</h2>
    </div>
  )
}

export default Contact