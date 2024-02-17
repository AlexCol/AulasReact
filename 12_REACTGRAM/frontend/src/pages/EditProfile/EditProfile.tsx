import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './EditProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Message from '../../components/Message/Message';
import { IUserSate, profile, resetMessage, updateProfile } from '../../slices/userSlice';
import { uploads } from '../../utils/config';

function EditProfile() {	
  const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const bioRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<File|null>(null);

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

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const userData:any = {
			name: nameRef.current!.value,
			password: passwordRef.current!.value,
			bio: bioRef.current!.value,
			profileImage: previewImage
		}

		//build form-data
		const formData = new FormData();
		Object.keys(userData).forEach((key) => {
			if (userData[key]) {
				formData.append(key, userData[key]);		
			}
		});
		await dispatch(updateProfile(formData));
		setTimeout(() => {
			dispatch(resetMessage());
		}, 2000);
	}

	function handleFile(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		if(!e.target.files) return;

		const image = e.target.files[0];
		setPreviewImage(image);		
		
		//!para leitura de bytes pelo file input
		// const file = e.target.files[0];
		// const reader = new FileReader();
		// reader.onload = (e) => {
    //   if(!e.target) return;
		// 	console.log('bah')
		// 	const arrayBuffer = e.target.result as ArrayBuffer;
    //   const bytes = new Uint8Array(arrayBuffer);
		// 	setPreviewImage(bytes);
    // };
		// reader.readAsArrayBuffer(file);
		//!depois pra uso no html
		// {previewImage && (
		// 	<img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...previewImage))}`} alt="Imagem" />
		// )}
	}

	return (
		<div id={styles.edit_profile}>
			<h2>Edite seus dados.</h2>
			<p className={styles.subtitle}>Adicione uma imagem de perfil e conte mais sobre você...</p>

			{(user && (user.profileImage || previewImage)) && (
				<img className={styles.profile_image} src={
					previewImage ?
						URL.createObjectURL(previewImage)
						:
						`${uploads}/users/${user.profileImage}`
				} alt="profileImage" />
			)}
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					<span>E-Mail:</span>
					<input id='email' autoComplete='none' type="email" placeholder="E-mail" disabled ref={emailRef} />
				</label>
				<label htmlFor="name">
					<span>Name:</span>
					<input
						id='name'
						autoComplete='name'
						type="text"
						required
						placeholder="Nome"
						ref={nameRef}
					/>
				</label>
				<label>
          <span>Imagem de Perfil:</span>
          <input type="file" onChange={handleFile}/>

        </label>
        <label htmlFor='bio'>
          <span>Bio:</span>
          <input
            id="bio"
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
        {
				message && <Message msg={message} type="success" />
				}
			</form>
		</div>
	)
}
export default EditProfile