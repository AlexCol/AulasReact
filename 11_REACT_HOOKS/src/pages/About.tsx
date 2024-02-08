import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

function About() {
  const {logado} = useContext(SomeContext);
  return (
    <div>
      <h1>About</h1>
      <p>Logado: {logado ? "Sim" : "Não"}</p>
    </div>
  )
}
export default About