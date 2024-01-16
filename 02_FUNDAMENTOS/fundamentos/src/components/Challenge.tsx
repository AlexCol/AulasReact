import { ChangeEvent, useState } from "react"

const Challenge = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [soma, setSoma] = useState(0);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'n1')
            setN1(Number(e.target.value));
        if (e.target.name === 'n2')
            setN2(Number(e.target.value));
    }
    
    return (
        <div>
            <input 
                type="number" 
                name='n1' 
                placeholder='Informe N1'
                value={n1}
                required
                onChange={handleChange}
            />
            <input 
                type="number" 
                name='n2' 
                placeholder='Informe N2'
                value={n2}
                required
                onChange={handleChange}
            />
            <button type="button" onClick={() => setSoma(n1+n2)}>Somar</button>
            <h3>A soma é: {soma}</h3>
        </div>
    )
}

export default Challenge