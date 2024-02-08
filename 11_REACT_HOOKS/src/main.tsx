import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HookUseContext } from './components/HookUseContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <HookUseContext>
    <App />
  </HookUseContext>
  
  //</React.StrictMode>,
)
