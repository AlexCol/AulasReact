//import styles from './Navbar.module.css';

import { BsHouseDoorFill, BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

function NavBar() {
	return (
		<div>
			<nav id='nav'>
				<Link to='/'>ReactGram</Link>
				<form>
					<BsSearch />
					<input type="text" />
				</form>
				
				<Link to="/"><BsHouseDoorFill/></Link>
				<Link to='/login'>Entrar</Link>
				<Link to='/Register'>Cadastrar</Link>
			</nav>
		</div>
	)
}
export default NavBar