type Props = {
    componentName: string
}
const MyComponent = ({componentName}: Props) => {
  return (
    <div>
        <h2>
            Estou sendo reaproveitado em vários lugates. Agora vim de <b>{componentName}</b>
        </h2>
    </div>
  )
}

export default MyComponent