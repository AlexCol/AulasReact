import { useContext } from "react";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

function Home() {
  const {logado, alterarStatus} = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Logado: {logado ? "Sim" : "Não"}</p>
      <button onClick={alterarStatus}>{logado ? "Logoff" : 'Login'}</button>
      <hr />
      <HookUseRef />
    </div>
  )
}
export default Home