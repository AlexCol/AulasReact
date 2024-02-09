import { useLayoutEffect, useState } from "react"

function HookUseLayout() {
	const [name, setName] = useState("algum nome");
	
	// useEffect(() => {
	// 	console.log("2");
	// 	console.log("onUseEffect: " + name);
	// 	setName("Mudou de nome");
	// },[]);

	useLayoutEffect(() => {
		console.log("1");
		console.log("onUseLayout " + name);
		setName("Outro Nome");
	}, []);
	
	console.log("onrender: " + name);

	return (
		<div>
			<h2>UseLayout</h2>
			<p>{name}</p>
			<hr />
		</div>
  	)
}
export default HookUseLayout