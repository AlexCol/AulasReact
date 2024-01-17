type Props = {
    changeMessage: Function
}

const ChangeMessageState = ({ changeMessage }: Props) => {
    const messages = ["Oi", "Olá", "Oi, tudo bem?"];
    return (
        <>
            <button onClick={() => changeMessage(messages[0])}>1</button>
            <button onClick={() => changeMessage(messages[1])}>2</button>
            <button onClick={() => changeMessage(messages[2])}>3</button>
        </>
  )
}

export default ChangeMessageState