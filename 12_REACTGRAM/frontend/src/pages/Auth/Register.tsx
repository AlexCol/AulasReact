import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

//+CSS
import styles from './Auth.module.css';

//+REDUX
import { useDispatch, useSelector} from 'react-redux';
import { IAuthSate, register, reset } from '../../slices/authSlice';
import { AppDispatch, RootState } from '../../store';

function Register() {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch<AppDispatch>();
	const { loading, error } = useSelector<RootState, IAuthSate>((state) => state.auth);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		
		const user = {
			name: nameRef.current!.value,
			email: emailRef.current!.value,
			password: passwordRef.current!.value,
			confirmPassword: confirmPasswordRef.current!.value
		}

		console.log(user);
		dispatch(register(user));
	}

	useEffect(() => {
		dispatch(reset());
	}, [dispatch])

	return (
		<div id={styles.register}>
			<h2>ReactGram</h2>
			<p className={styles.substitle}>Cadastre-se para ver as fotos dos seus amigos.</p>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder='Nome'
					ref={nameRef}
				/>
				<input 
					type="text" 
					placeholder='E-mail'
					ref={emailRef}
				/>
				<input 
					type="password" 
					placeholder='Senha'
					ref={passwordRef}
				/>
				<input 
					type="password" 
					placeholder='Confirme a senha.'
					ref={confirmPasswordRef}
				/>
				<input type="submit" value="Cadastrar"/>
			</form>
			<p>
				Já tem conta? <Link to='/login'>Clique aqui.</Link>
			</p>
			{error && typeof error === 'boolean' && <p>Houve um erro. Tente novamente mais tarde.</p>}
			{error && typeof error !== 'boolean' && error.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</div>
	)
}
export default Register