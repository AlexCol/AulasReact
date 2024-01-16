import { useState } from "react"

const Events = () => {   
    const [cont, setCont] = useState(0);

    const handleMyEventSum = () => {
        setCont(cont+1);
    }
    const handleMyEventSub = () => {
        setCont(cont-1);
    }   
    
    const renderSomething = (x: boolean) => {
        if(x) {
            return <h1>Rendezidado a partir de função, com true.</h1>
        } else {
            return <h1>Rendezidado a partir de função, com false.</h1>
        }
    }

    return (
    <div>
        <div>
            <button onClick={handleMyEventSum}>CliqueAquiParaSomar</button>
            <button onClick={handleMyEventSub}>CliqueAquiParaSubtrair</button>
            <p>Valor atual: {cont}</p>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    </div>
  )
}

export default Events
