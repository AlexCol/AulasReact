import './App.css'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { useHandleTabClose } from './hooks/useHandleTabClose'

function App() {
	useHandleTabClose();
	
	return (
    <div className='App'>
			<AppRoutes />
    </div>
  )
}

export default App
