import { useRef } from "react"
import SomeComponent, { SomeComponentHandle } from "./SomeComponent";

function HookUseImperativeHandle() {
	const inputRef = useRef<SomeComponentHandle>(null); //+ useRef no compomente 'pai' deve usar o tipo que será criado no filho, para retorno da função
	
	function handleClick() {
		if (inputRef.current)
			inputRef.current.validate();
	}

	return (
		<div>
			<h2>UseImperativeHandle</h2>
			<SomeComponent someText={"olá"} ref={inputRef} />
			<button onClick={handleClick}>Validate</button>

			<hr />
		</div>
  	)
}
export default HookUseImperativeHandle