import User from "./UserInterface";

type Props = {
    usuario: User
}

const RenderUser = ({ usuario }: Props) => {
  return (
    <>
        <h1>Nome: {usuario.Name}</h1>
        <h2>Idade: {usuario.Age}</h2>
        <h3>Profissão: <b>{usuario.Job}</b></h3>
        {usuario.Age >= 18 ? <p>Pode dirigir.</p> : <p>Menor de idade.</p> }        
    </>
  )
}

export default RenderUser