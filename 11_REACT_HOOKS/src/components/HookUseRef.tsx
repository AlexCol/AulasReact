import { useRef, useState } from "react"

function HookUseRef() {
    const numberRef = useRef(0);
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);

    numberRef.current = counterA + counterB;
    // useEffect(() => {
    //     numberRef.current += 1;
    // })

    
    function setFocus() {
        if(inputRef.current) {
            inputRef.current.focus(); //coloca o foco
            //inputRef.current.blur(); //remove o foco
            inputRef.current.value = numberRef.current.toString();
        }
    }
    
    return (
        <div>
            <h3>HookUseRef</h3>
            <p>O compomente renderizou: {numberRef.current} vez{numberRef.current === 1 ? '' : 'es'} devido aos clicks dos botoes abaixo.</p>
            <button onClick={() => setCounterA(counterA+1)}>Contator A: {counterA}</button>
            <button onClick={() => setCounterB(counterB+1)}>Contator B: {counterB}</button>

            <input type="text" ref={inputRef} placeholder="Testando focus"/>
            <button onClick={setFocus}>Clique para o foco voltar para o input.</button>
            <hr />
        </div>
    )
}
export default HookUseRef