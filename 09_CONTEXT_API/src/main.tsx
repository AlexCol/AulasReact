import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CounterContextProvider } from './Contexts/CounterContext.tsx'
import { TitleColorContextProvider } from './Contexts/TitleColorContext.tsx'
import { UpAndDownContextProvider } from './Reduce/UpAndDownContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  {/*<React.StrictMode>*/}
    {/* 2-Adicionando provider */}
    <CounterContextProvider>
    <TitleColorContextProvider>
    <UpAndDownContextProvider>
    <App />
    </UpAndDownContextProvider>
    </TitleColorContextProvider>      
    </CounterContextProvider>
  {/*</React.StrictMode>*/}
  </>
)
