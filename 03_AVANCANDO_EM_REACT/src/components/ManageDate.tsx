import { useState } from 'react'

const ManageDate = () => {
    let someData: number = 10;
    const [someNumber, setSomeNumber] = useState(0);
    return (
    <div>
        <p>Valor SomeData: {someData}</p>
        <button onClick={() => {
            someData++;
            console.log(someData);
        }}>Click on me.</button>

        <p>Valor SomeNumber: {someNumber}</p>
        <button onClick={() => setSomeNumber(someNumber+1)}>Click on me too!</button>
    </div>
  )
}

export default ManageDate