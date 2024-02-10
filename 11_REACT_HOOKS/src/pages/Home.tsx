import { useContext } from "react";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayout from "../components/HookUseLayout";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

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
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayout />
	  <HookUseImperativeHandle />
	  <HookCustom />
    </div>
  )
}
export default Home