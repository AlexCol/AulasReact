//+CSS
import styles from './Navbar.module.css';

import { useAuthValue } from '../../context/AuthContext';
import { NavLink } from "react-router-dom"
import { useAuthentication } from '../../Hooks/useAuthentication';

const Navbar = () => {
  const user = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
        </li>
        {!user && 
          <>
            <li>
              <NavLink to="/loggin" className={({isActive}) => isActive ? styles.active : ''}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({isActive}) => isActive ? styles.active : ''}>Cadastrar</NavLink>
            </li>
          </>
        }
        {user && 
          <>
            <li>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? styles.active : ''}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/post/create" className={({isActive}) => isActive ? styles.active : ''}>Criar Post</NavLink>
            </li>
          </>
        }        
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>About</NavLink>
        </li>
        {user && <button onClick={logout}>Sair</button>}
      </ul>      
    </nav>
  )
}
export default Navbar