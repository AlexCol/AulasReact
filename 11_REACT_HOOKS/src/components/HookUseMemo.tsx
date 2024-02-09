import { useEffect, useMemo, useState } from "react"

function HookUseMemo() {
    const [number, setNumber] = useState('1');
    
    //const premiumNumbers = ['0', '100', '200'];
    const premiumNumbers = useMemo(() => {
        console.log("oi premium");
        return ['0', '100', '200'];
    }, []);

    const validaAcerto = (id: string) => {
        const acertou = premiumNumbers.includes(number)        
        if(acertou) {
            premiumNumbers.push(id);
            console.log(premiumNumbers);
        }
        return acertou;
    }

    useEffect(() => {
        console.log("Premium numbers foi alterado.");
    }, [premiumNumbers])

    return (    
        <div>
            <h2>UseMemo</h2>
            <input 
                type="text"                
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                
            />
            <p>
				{validaAcerto(number) ? "Acertou!" : "Adivinhe o numero."}
			</p>
			<hr />

        </div>
  )
}
export default HookUseMemo