import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

//+CSS
import styles from './Auth.module.css';

//+REDUX
import { useDispatch, useSelector} from 'react-redux';
import { IAuthSate, register, reset } from '../../slices/authSlice';
import { AppDispatch, RootState } from '../../store';
import Message from '../../components/Message/Message';

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

		dispatch(register(user));
		//não precisa de nvigate, pois o controle das rotas, caso logado, ele vai jogar pra home automaticamente
	}

	useEffect(() => {
		dispatch(reset());
	}, [dispatch]);

	return (
		<div id={styles.register}>
			<h2>ReactGram</h2>
			<p className={styles.substitle}>Cadastre-se para ver as fotos dos seus amigos.</p>
			<form onSubmit={handleSubmit}>
				<input 
					name='name'
					autoComplete='name'
					type="text" 
					placeholder='Nome'
					required
					ref={nameRef}
				/>
				<input 
					name='email'
					autoComplete='email'
					type="text" 
					placeholder='E-mail'
					required
					ref={emailRef}
				/>
				<input 
					name='password'
					type="password" 
					placeholder='Senha'
					required
					ref={passwordRef}
				/>
				<input 
					name='confirmPassword'
					type="password" 
					placeholder='Confirme a senha.'
					required
					ref={confirmPasswordRef}
				/>
				<input 
					type="submit" 
					value={loading ? "Aguarde" : "Cadastrar"}
					disabled= {loading}
				/>
			</form>
			<p>
				Já tem conta? <Link to='/login'>Clique aqui.</Link>
			</p>
			{error && typeof error === 'boolean' && <Message msg='Ocorreu um erro, tente novamente mais tarde.' type='error'/>}
			{error && typeof error !== 'boolean' && error.map((error, index) => (
				<Message key={index} msg={error} type='error' />
			))}
		</div>
	)
}
export default Register