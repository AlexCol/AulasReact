import MyComponent from "./MyComponent"

interface Props {
    nomeCompleto:string[]
}

export default function MeuMapComponent({nomeCompleto}: Props) {
    return (
        <div>
            <ul>
                {nomeCompleto.length > 0 ? (
                    nomeCompleto.map((nome) => (
                    <li>
                        {nome}
                    </li>
                ))) : (
                    <li>Sem nome cadastrado.</li>
                )}
            </ul>      
            <MyComponent componentName="MeuMapComponent"/>
        </div>
    )
}