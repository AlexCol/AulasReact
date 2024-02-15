import { FormEvent, useEffect, useState } from 'react';
import styles from './EditProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Message from '../../components/Message/Message';
import { IUserSate, profile } from '../../slices/userSlice';

function EditProfile() {	
	const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [previewImage, setPreviewImage] = useState("");

	const { user, loading, error, message } = useSelector<RootState, IUserSate>((state) => state.user);
	const dispatch = useDispatch<AppDispatch>();
	
	useEffect(() => {
		console.log('oi');
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
			<input name='email' autoComplete='none' type="email" placeholder="E-mail" disabled value={email || ""} />
			<input
          name='name'
					autoComplete='name'
					type="text"
					required
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />				
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
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input
            name="password"
						type="password"
            placeholder="Digite sua nova senha..."
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
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