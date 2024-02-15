import { useEffect, useRef } from 'react';
import styles from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IAuthSate, login, reset } from '../../slices/authSlice';
import { Link } from 'react-router-dom';
import Message from '../../components/Message/Message';
function Login() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch<AppDispatch>();
	const { loading, error } = useSelector<RootState, IAuthSate>((state) => state.auth);
	
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = {
			email: emailRef.current!.value,
			password: passwordRef.current!.value
		}
		dispatch(login(data));
		//não precisa de nvigate, pois o controle das rotas, caso logado, ele vai jogar pra home automaticamente
	}

	useEffect(() => {
		dispatch(reset());
	}, [dispatch]);

	return (
		<div id={styles.login}>
			<h2>ReactGram</h2>
			<p className={styles.subtitle}>Faça o login para vre o que há de novo!</p>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder='E-mail'
					required
					ref={emailRef}
				/>
				<input 
					type="password" 
					required
					placeholder='Senha'
					ref={passwordRef}
				/>
				<input 
					type="submit" 
					value={loading ? "Aguarde" : "Entrar"}
					disabled= {loading}
				/>				
			</form>
			<p>
				Já tem conta? <Link to='/register'>Clique aqui.</Link>
			</p>
			{error && typeof error === 'boolean' && <Message msg='Ocorreu um erro, tente novamente mais tarde.' type='error'/>}
			{error && typeof error !== 'boolean' && error.map((error, index) => (
				<Message key={index} msg={error} type='error' />
			))}			
		</div>
	)
}
export default Login