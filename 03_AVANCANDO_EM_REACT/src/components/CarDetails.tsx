type Props = {
    brand: string,
    color: string,
    km: number,
    isNew: boolean
}

const CarDetails = (props: Props) => 
{
  return (
    <div>
        <h1>Detalhes do carro:</h1>
        <p>A marca é {props.brand}</p>
        <p>A cor é: {props.color}</p>
        <p>A KM é {props.km}</p>
        {props.isNew && <p>E o carro é novo!</p>}
    </div>
  )
}

export default CarDetails