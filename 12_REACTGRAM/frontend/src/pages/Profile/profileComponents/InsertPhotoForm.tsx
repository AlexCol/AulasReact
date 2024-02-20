import styles from '../Profile.module.css'
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { IPhotoData } from '../../../interfaces/IPhotoData';
import { publishPhoto, resetPhotoMessage } from '../../../slices/photoSlice';
import Message from '../../../components/Message/Message'

interface IPhotoInsert {
	loadingPhoto: boolean,
	messagePhoto: string,
	errorPhoto: boolean|[]
}

function InsertPhotoForm({loadingPhoto, messagePhoto, errorPhoto}: IPhotoInsert) {	
	const dispatch = useDispatch<AppDispatch>();
	
	//!useStates
	const [newPhoto, setNewPhoto] = useState<File|null>(null);
	const [error, setError] = useState<string>('');

	//!refs
	const titleRef = useRef<HTMLInputElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);

	//!handleSubmit
	async function submitHandle(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError('');
		if(!titleRef.current?.value || !newPhoto) {
			setError('Imagem e titulo devem estar preenchidos.')
			return;
		} 
		
		const newPhotoData:IPhotoData = {
			title: titleRef.current.value,
			image: newPhoto 
		}
		//build form-data
		const formData = new FormData();
		formData.append('title', newPhotoData.title),
		formData.append('image', newPhoto)
		
		await dispatch(publishPhoto(formData));		
		
		titleRef.current.value = '';
		if (imageRef.current) imageRef.current.value = '';
		setNewPhoto(null);
		setTimeout(() => {
			dispatch(resetPhotoMessage());
		}, 2000);
	}
	
	//!handleFile
	function handleFile(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		if(!e.target.files) return;
		const image = e.target.files[0];
		setNewPhoto(image);
	}
	
	return (
		<div className={styles.new_photo}>
			<h3>Compartilhe algum momento seu:</h3>
			<form onSubmit={submitHandle}>
				<label htmlFor="tittle">
					<span>Título para a foto:</span>
					<input id='tittle' type="text" placeholder="Título da foto." required ref={titleRef}/>
				</label>
				<label htmlFor="image">
					<span>Imagem:</span>
					<input id='image' type="file" ref={imageRef} onChange={handleFile}/>
				</label>							
				<input
					type="submit" 
					value={loadingPhoto ? "Aguarde" : "Postar"}
					disabled= {loadingPhoto}
				/>
				{error && <Message msg={error} type='error'/>}
				{errorPhoto && typeof errorPhoto === 'boolean' && <Message msg='Ocorreu um erro, tente novamente mais tarde.' type='error'/>}
				{errorPhoto && typeof errorPhoto !== 'boolean' && errorPhoto.map((error, index) => (
					<Message key={index} msg={error} type='error' />
				))}
				{messagePhoto && <Message msg={messagePhoto} type="success" />}
			</form>
		</div>
	)
}
export default InsertPhotoForm