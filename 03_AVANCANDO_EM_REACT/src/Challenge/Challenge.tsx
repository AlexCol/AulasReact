import User from "./UserInterface";
import RenderUser from "./RenderUser";
import { useEffect, useState } from "react";

const Challenge = () => {
    const [listaUsuarios, setLista] = useState<User[]>([
        { Name: 'Alex', Age: 38, Job: 'Programmer'},
        { Name: 'Bernard', Age: 18, Job: 'Programmer'},
        { Name: 'Coletti', Age: 17, Job: 'Programmer' }
    ]);

    useEffect(() => 
        setLista(listaUsuarios.concat([{ Name: 'Deise', Age: 44, Job: 'Sorcerer' }]))
        , []
    )
    
    console.log(listaUsuarios);
  
    return (
        <div>
            {listaUsuarios.map((usuarioLista, indice) => (
                <RenderUser key={indice} usuario={usuarioLista} />
            ))}            
        </div>
    )
}

export default Challenge