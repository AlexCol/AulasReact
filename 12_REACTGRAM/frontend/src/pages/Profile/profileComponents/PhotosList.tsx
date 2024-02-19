import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'
import Message from '../../../components/Message/Message'
import { IPhotoData } from '../../../interfaces/IPhotoData'
import { uploads } from '../../../utils/config'
import styles from '../Profile.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AppDispatch } from '../../../store'
import { useDispatch } from 'react-redux'
import { deletePhoto, resetPhotoMessage } from '../../../slices/photoSlice'

interface IPhotosList {
	photos: IPhotoData[],
	photo?: IPhotoData|null,
	searchedUserId: string
	currentUserId: string
}

function PhotosList({photos, photo = null, searchedUserId, currentUserId} : IPhotosList) {
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch<AppDispatch>();

	//!reset function
	function resetComponentMessage() {
		setTimeout(() => {
			dispatch(resetPhotoMessage());
		}, 2000);
	}
	
		//!handleDelete
		async function handleDelete(id: string) {
			dispatch(deletePhoto(id));
			resetComponentMessage();
		}

	return (
		<div className={styles.photos_container}>
		{photos && photos.map((onePhoto) => (
			<div className={styles.photo} key={onePhoto._id}>
				<p>{onePhoto.title}</p>
				{onePhoto.image && (
					<img 
						src={`${uploads}/photos/${onePhoto.image}`} 
						alt={onePhoto.title}
					/>
				)}
				{searchedUserId === currentUserId ? (
					<div className={styles.actions}>
						<Link to={`/photos/${photo?._id}`}>
							<BsFillEyeFill />
						</Link>
						<BsPencilFill />
						<BsXLg onClick={() => (onePhoto?._id) ? handleDelete(onePhoto?._id) : setError("Foto não pôde ser excluida. Tente novamente mais tarde.")}/>
					</div>
				) : (
					<Link className={`${styles.btnVer} ${'btn'}`} to={`/photos/${onePhoto._id}`}>Detalhes</Link>
				)}
				{error && <Message msg={error} type='error'/>}
			</div>
		))}
		{photos.length === 0 && <p>Ainda não há fotos publicadas...</p>}
	</div>

	)
}
export default PhotosList