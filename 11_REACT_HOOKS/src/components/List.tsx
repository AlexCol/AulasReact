import { useEffect, useState } from "react"

interface IList {
    getItens: () => string[]
}

function List({getItens}: IList) {
    const [myItens, setMyItens] = useState<string[]>([]);

    useEffect(()=> {
        console.log("buscando itens do db");
        setMyItens(getItens);
    }, [getItens]);

    return (
        <div>
        {
            myItens.map((item, index) => (
                <p key={index}>{item}</p>
            ))
        }
        </div>
    )
}
export default List