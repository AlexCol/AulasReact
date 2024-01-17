import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import ExecuteFuncion from './components/ExecuteFuncion'
import Fragments from './components/Fragments'
import Images from './components/Images'
import ListRender from './components/ListRender'
import ManageDate from './components/ManageDate'
import ReusingComponent from './components/ReusingComponent'
import ShowUserName from './components/ShowUserName'
import showMessage from './funcoes/showMessage'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import Challenge from './Challenge/Challenge'

//! forma para manter a variavel e sua 'handle' em outro arquivo
import {meuHandleMessage} from './funcoes/meuHandleMessage'


function App() {
  const userName = "Alexandre";
  
  //! forma para manter a variavel e sua 'handle' em outro arquivo
  const {message, handleMessage} = meuHandleMessage();
  /*
  const [message, setMessage] = useState("");
  const handleMessage = (msg: string) => {
    setMessage(msg);
  };
  */

  return (
    <div>
      <h1>Avançando em react.</h1>

      {/* carregando imagens */}
      <Images />

      {/* manipulando e atualizando variaveis */}
      <ManageDate />
      
      {/* renderizando lista */}
      <ListRender />
      
      {/* condicional para apresentar informação */}
      <ConditionalRender />

      {/* recebendo props */}
      <ShowUserName name={userName}/>
      
      {/* reutilizando components */}
      <CarDetails brand='VW' km={1000} color='Blue' isNew={false}/>
      <CarDetails brand='Ford' km={0} color='Red' isNew={true}/>
      
      {/* reutilizando componentes com map */}
      <ReusingComponent />
    
      {/* fragments */}
      <Fragments name='Bernard' />

      {/* children */}
      <Container>
        <p>Esse é o conteudo filho.</p>
      </Container>

      {/* função como prop */}
      <ExecuteFuncion execute={showMessage} />

      {/* state Lift */}
      <Message msg={message}/>
      <ChangeMessageState changeMessage={handleMessage}/>

      {/* tarefa - arquivos em challenge */}
      <Challenge />
    </div>    
  )
}

export default App
