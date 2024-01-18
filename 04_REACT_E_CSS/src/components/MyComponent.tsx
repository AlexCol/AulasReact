import './MyComponent.css';


const MyComponent = () => {
  return (
    <div>
        <h1>MyComponent</h1>
        <p>Esse é o paragrafo do componente.</p>
        <p className="my-comp-paragraf">Esse paragrafo possui class name e seu estilo não vaza, a menos que alguem use sua classe.</p>
    </div>
  )
}

export default MyComponent