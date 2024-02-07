import './App.css'
import axios from 'axios';

function App() {  

  const Connect = () => {
    const api = axios.create({
      baseURL: "https://localhost:5000"
    });  

    console.log("oi");
    const buscaToken = async() => {      
      api.defaults.withCredentials = true;

      const dadosLogin = {userName: "WackoAlex", Password: "1234"};      
      const response = await api.post('auth/signin', dadosLogin);
      console.log(response.data);
      
      const refreshResponse = await api.post('auth/refresh');
      console.log(refreshResponse.data);
      
      const revokeResponse = await api.get('auth/revoke');
      console.log(revokeResponse.data);
    }
    buscaToken();
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={Connect}>Conect</button>
    </>
  )
}

export default App;