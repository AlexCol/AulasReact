import { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './EditProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Message from '../../components/Message/Message';
import { IUserSate, profile } from '../../slices/userSlice';

function EditProfile() {	
  const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const bioRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

	const { user, loading, error, message } = useSelector<RootState, IUserSate>((state) => state.user);
	const dispatch = useDispatch<AppDispatch>();


	useEffect(() => {
		if(user) {
			if(nameRef.current) nameRef.current.value = user.name;
			if(emailRef.current) emailRef.current.value = user.email;
			if(bioRef.current) bioRef.current.value = user.bio || '';
		}
	}, [user])
	

	useEffect(() => {
		dispatch(profile());
	}, [dispatch]);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

	}

	return (
		<div id={styles.edit_profile}>
			<h2>Edite seus dados.</h2>
			<p className={styles.subtitle}>Adicione uma imagem de perfil e conte mais sobre você...</p>

			{/* preview da imagem */}

			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					<span>E-Mail:</span>
					<input name='email' autoComplete='none' type="email" placeholder="E-mail" disabled ref={emailRef} />
				</label>
				<label htmlFor="name">
					<span>Name:</span>
					<input
						name='name'
						autoComplete='name'
						type="text"
						required
						placeholder="Nome"
						ref={nameRef}
					/>
				</label>
				<label>
          <span>Imagem de Perfil:</span>
          <input type="file" />
        </label>
        <label>
          <span>Bio:</span>
          <input
            name="bio"
						type="text"
            placeholder="Descrição do perfil"
						ref={bioRef}
          />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input
            name="password"
						type="password"
            placeholder="Digite sua nova senha..."
						ref={passwordRef}
          />
        </label>
				<input
					type="submit" 
					value={loading ? "Aguarde" : "Atualizar"}
					disabled= {loading}
				/>	
				{error && typeof error === 'boolean' && <Message msg='Ocorreu um erro, tente novamente mais tarde.' type='error'/>}
				{error && typeof error !== 'boolean' && error.map((error, index) => (
					<Message key={index} msg={error} type='error' />
				))}			
        {/*
				message && <Message msg={message} type="success" />
				*/}
			</form>
		</div>
	)
}
export default EditProfile