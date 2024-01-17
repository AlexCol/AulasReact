type Props = {
    msg: string
}

const Message = ({msg}: Props) => {
  return (
    <>
        <p>A mensagem é: {msg}</p>
    </>
  )
}

export default Message