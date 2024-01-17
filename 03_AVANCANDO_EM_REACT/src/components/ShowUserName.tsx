type Props = {
    name: string
}

const ShowUserName = ({name}: Props) => {
  return (
    <div>
        <h1>O nome informado é: {name}</h1>
    </div>
  )
}

export default ShowUserName