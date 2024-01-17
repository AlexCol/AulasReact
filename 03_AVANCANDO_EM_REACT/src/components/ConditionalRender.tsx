import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Se x for false, não!</p>}
            { name === "Alex" ? (
                <div>
                    <p>O nome é Alex</p>
                </div>
                ) : (
                <div>
                    <p>O nome é diferente.</p>
                </div>                        
                )
            }
            <button onClick={() => setName("Alex")}>Clique Aqui</button>
        </div>
        
    )
}

export default ConditionalRender