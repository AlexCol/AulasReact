
type Props = {
  name: string
}

function Fragments({name}: Props) {
  return (
    <>
        <h2>Primeiro Titulo</h2>
        <h3>Segundo título</h3>
        <h4>{name}</h4>
    </>
  )
}

export default Fragments