import styles from '../Profile.module.css'
import Message from '../../../components/Message/Message'
import { uploads } from '../../../utils/config'
import { IPhotoData } from '../../../interfaces/IPhotoData'
import { FormEvent, useEffect, useRef } from 'react'
import { resetMessage, updatePhoto } from '../../../slices/photoSlice'
import { AppDispatch } from '../../../store'
import { useDispatch } from 'react-redux'

interface IPhotoEdit {
	photo: IPhotoData|null,
	errorPhoto: boolean|string[],
	messagePhoto: string,
	setPhotoToEdit: Function
}

function UpdatePhotoForm({photo, errorPhoto, messagePhoto, setPhotoToEdit} : IPhotoEdit) {
	const dispatch = useDispatch<AppDispatch>();
	const titleRef = useRef<HTMLInputElement>(null);

	function handleUpdate(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if(!photo?._id || !titleRef.current) return;

		const photoData = {
      id: photo._id,
			title: titleRef.current.value      
    };
		dispatch(updatePhoto(photoData));
		setTimeout(() => {      
			dispatch(resetMessage());			
			setPhotoToEdit(null);
    }, 2000);		
	}
	function handleCancelEdit() {
		setPhotoToEdit(null);
	}

	useEffect(() => {
		if(titleRef.current && photo)
			titleRef.current.value = photo.title;
	}, [photo])

	return (
		<div className={`${styles.edit_photo}`}>
		<p>Editando:</p>
		{photo && (
			<img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
		)}
		<form onSubmit={handleUpdate}>
			<input
				type="text"
				required
				placeholder={photo?.title}
				ref={titleRef}
			/>
			<input type="submit" value="Atualizar" />
		</form>
		<button className={styles.cancel_btn} onClick={handleCancelEdit}>
			Cancelar edição
		</button>
		{errorPhoto && typeof errorPhoto !== "boolean" && <Message msg={errorPhoto[0]} type="error" />}
		{messagePhoto && <Message msg={messagePhoto} type="success" />}
	</div>

	)
}
export default UpdatePhotoForm