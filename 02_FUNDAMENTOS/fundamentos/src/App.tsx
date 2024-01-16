import FirstComponente from './components/FirstComponent';
import MeuMapComponent from './components/MeuMapComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  const minhaVariavel = 'minha Variavel';
  const meuNome = ['Alexnadre', 'Bernard', 'Coletti'];

  return (
    <div>
      <h1>Vite + React {minhaVariavel}</h1>
      <TemplateExpressions />
      <FirstComponente />
      <MeuMapComponent nomeCompleto = {meuNome} />      
      <Events/>
      <Challenge />
    </div>
  )
}

export default App
