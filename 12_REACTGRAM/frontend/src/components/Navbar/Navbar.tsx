import styles from './Navbar.module.css';

import { BsFillCameraFill, BsFillPersonFill, BsHouseDoorFill, BsSearch } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IAuthSate, logout, reset } from '../../slices/authSlice';
import { NavLink } from 'react-router-dom';
import { FormEvent, useRef } from 'react';

interface INavBarProps {
	auth: boolean;
}

function NavBar({auth}: INavBarProps) {
	const searchRef = useRef<HTMLInputElement>(null);
	const { authUser }= useSelector<RootState, IAuthSate>((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	function handleLogout() {
		dispatch(logout());
		dispatch(reset());
		navigate('/login');
	}
	function handleSeach(event: FormEvent<HTMLFormElement>) {
			event.preventDefault();
			if(searchRef.current?.value) {
				const searchValue = searchRef.current.value;
				searchRef.current.value = '';
				return navigate(`/search?q=${searchValue}`);
			}
	}

	return (
		<div>
			<nav id={styles.nav}>
				<Link to='/'>
					<h2>ReactGram</h2>
				</Link>
				{auth && (
				<form id={styles.search_form} onSubmit={handleSeach}>
					<BsSearch />
					<input name='search' type="text" placeholder="Pesquisar" ref={searchRef}/>
				</form>
				)}

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