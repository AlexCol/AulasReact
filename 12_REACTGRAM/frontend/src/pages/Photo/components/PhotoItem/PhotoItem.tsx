import { Link } from 'react-router-dom';
import { IPhotoData } from '../../../../interfaces/IPhotoData';
import { uploads } from '../../../../utils/config';
import styles from './PhotoItem.module.css';

interface IPhotoProp {
	photo: IPhotoData
}

function PhotoItem({photo} : IPhotoProp) {
	return (
		<div className={styles.photo_item}>
			{photo.image && (
				<img src={`${uploads}/photos/${photo.image}`} alt={`${photo.title}`}/>
			)}
			<h2>{photo.title}</h2>
			<p className={styles.photo_author}>
				Publicada por: <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
			</p>
		</div>
	)
}
export default PhotoItem