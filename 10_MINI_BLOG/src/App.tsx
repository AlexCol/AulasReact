import { useEffect, useState } from 'react';
import './App.css'
import Routs from './components/Routs/Routs'
import { AuthProvider } from './context/AuthContext'
import { useAuthentication } from './Hooks/useAuthentication';
import { User, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState<User|null|undefined>(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  }, [auth]);

  if(loadingUser) {    
      return <p>Carregando...</p>
  }
  return (
    <div className='App'>
      <AuthProvider value={user}>
        <Routs />
      </AuthProvider> 
    </div>
  )
}

export default App
