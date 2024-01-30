import { useEffect } from 'react';
import './App.css'
import axios, { AxiosRequestConfig } from 'axios';
import { useCookies } from 'react-cookie';

function App() {
  const api = axios.create({
    baseURL: "https://localhost:5000/"
  });

  const [tokenCookies, setTokenCookies] = useCookies(["accesToken", "refreshToken"]);

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenCookies.accesToken}`
    },
    withCredentials: true
  };

  useEffect(() => {
    const buscaToken = async() => {
      api.defaults.withCredentials = true;

      const dadosLogin = {userName: "WackoAlex", Password: "1234"};      

      const signinRespo = await api.post('auth/signin', dadosLogin, config);

      setTokenCookies('accesToken', signinRespo.data.accesToken, {
        secure: true,
        path: '/',
        sameSite: 'none',
        expires: new Date(Date.now() + 20000 * 1000)
      });
      setTokenCookies('refreshToken', signinRespo.data.refreshToken, {
        secure: true,
        path: '/',
        sameSite: 'none',
        expires: new Date(Date.now() + 20000 * 1000)
      });      
      
      //const revokeResponse = await api.get('auth/revoke');
      //console.log(revokeResponse);
      
      //await api.post('auth/refresh', config);
      //console.log(revokeResponse.data);
    }
    buscaToken();
  }, []);

  useEffect(() => {
    if (!tokenCookies.accesToken) return;
    
    console.log(tokenCookies.accesToken);
    
    const execute = async () => {
      const revokeResponse = await api.get('auth/revoke', config);
      console.log(revokeResponse.data);
      setTokenCookies('accesToken', null, {
        expires: new Date(Date.now())
      });
      setTokenCookies('refreshToken', null, {
        expires: new Date(Date.now())
      }); 
    } ;
    execute();
  }, [tokenCookies]);

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App


setTimeout('', 5000);