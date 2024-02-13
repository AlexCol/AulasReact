import styles from './Navbar.module.css';

import { BsHouseDoorFill, BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

function NavBar() {
	return (
		<div>
			<nav id={styles.nav}>
				<Link to='/'>
					<h2>ReactGram</h2>
				</Link>

				<form id={styles.search_form}>
					<BsSearch />
					<input type="text" placeholder="Pesquisar"/>
				</form>

				<ul id={styles.nav_links}>
					<li>
						<Link to="/"><BsHouseDoorFill/></Link>
					</li>
					<li>
						<Link to='/login'>Entrar</Link>
					</li>
					<li>
						<Link to='/Register'>Cadastrar</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
export default NavBar