import styles from './Navbar.module.css';

import { BsFillCameraFill, BsFillPersonFill, BsHouseDoorFill, BsSearch } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IAuthSate, logout, reset } from '../../slices/authSlice';
import { NavLink } from 'react-router-dom';

interface INavBarProps {
	auth: boolean;
}

function NavBar({auth}: INavBarProps) {
	const { authUser }= useSelector<RootState, IAuthSate>((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	function handleLogout() {
		dispatch(logout());
		dispatch(reset());
		navigate('/login');
	}

	return (
		<div>
			<nav id={styles.nav}>
				<Link to='/'>
					<h2>ReactGram</h2>
				</Link>

				<form id={styles.search_form}>
					<BsSearch />
					<input name='search' type="text" placeholder="Pesquisar"/>
				</form>

				<ul id={styles.nav_links}>
					{auth 
						? (//logado
							<>
								<li>
									<NavLink to="/"><BsHouseDoorFill/></NavLink>
								</li>
								{authUser && (
									<li>
										<NavLink to={`/users/${authUser._id}`}>
											<BsFillCameraFill />
										</NavLink>
									</li>
								)}
								<li>
									<NavLink to='/profile'>
										<BsFillPersonFill />
									</NavLink>
								</li>
								<li>
									<span onClick={handleLogout}>Sair</span>
								</li>								
							</>
						) : ( //nao logado
						<>
							<li>
								<NavLink to='/login'>Entrar</NavLink>
							</li>
							<li>
								<NavLink to='/Register'>Cadastrar</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</div>
	)
}
export default NavBar