import { useEffect, useState } from 'react';
import { useAuthentication } from '../../Hooks/useAuthentication';
import { IUser } from '../../Interfaces/IUser';
import styles from './Loggin.module.css';

const Loggin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  const {login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError("");

      const user:IUser = {
          displayName: '',
          email,
          password
      };

      const res = await login(user);
      if(res) {
          setEmail('');
          setPassword('');
      }
  }

  useEffect(() => {        
      if (authError.length > 0) {
          setError(authError);
          return;
      }
  }, [authError])

  return (
  <div className={styles.loggin}>
      <h1>Entrar.</h1>
      <p>Faça o loggin para entrar no sistema.</p>
      <form onSubmit={handleSubmit}>
          <label htmlFor="email">
              <span>E-Mail:</span>
              <input
                  type="email"
                  id='email'
                  value={email}
                  autoComplete='email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='E-Mail de usuário.'
              />
          </label>
          <label htmlFor="password">
              <span>Senha:</span>
              <input
              type="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Informe uma senha.'
          />
          </label>  
          {!loading && <button className="btn">Entrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
      </form>
  </div>
);
}
export default Loggin