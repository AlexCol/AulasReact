import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForm _name='Alex' _email='eu@com.br'/>
      <MyForm _name=''/>
    </div>
  )
}

export default App
