import { useContext } from "react"
import { CounterContext } from "../../Contexts/CounterContext";
import { useNavigate } from "react-router-dom";
import { useTitleColorContext } from "../../Hook/useTitleColorContext";



const Home = () => {  
  const counter = useContext(CounterContext);
  const {color, dispatch} = useTitleColorContext();;
  
  const navigate = useNavigate(); //+deve estar no inicio da função geral, e não dentro da função que efetivamente chama o navigate
  // useEffect(() => {
  //   navigate("/about");
  // }, [])

  function handleClick() {
    if (counter?.value && counter?.value >= 10) {
      navigate("/about");
    }
    counter?.setValue(counter?.value + 1);
  }

  const setTitleColor = (newColor: string) => {    
    dispatch({type: newColor});
  }

  return (
    <div>
        <h1 style={{color:color}}>Home</h1>
        <h2>O valor no contexto é: "{counter?.value}" - Estamos em Home</h2>
        <button onClick={handleClick} type="button">Add 1</button>
        <h3>A color que veio do meu reducer é: <span style={{color: color}}>{color}</span></h3>
        <div>
          <button onClick={() => setTitleColor('BLUE')}>Azul</button>
          <button onClick={() => setTitleColor('RED')}>Vermelho</button>
          <button onClick={() => setTitleColor('PURPLE')}>Roxo</button>          
        </div>
    </div>
  )
}

export default Home