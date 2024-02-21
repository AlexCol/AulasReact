import styles from './Like.module.css';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IPhotoData } from '../../../../interfaces/IPhotoData';
import { IAuthData } from '../../../../interfaces/IAuthData';

interface ILikeProp {
	photo: IPhotoData,
	user: IAuthData,
	handleLike: Function,
	fromHome?: boolean
}

function Like({photo, user, handleLike, fromHome = false}: ILikeProp) {
	return (
		<div className={fromHome ? styles.home_like : styles.like}>
			{photo.likes && user && (
				<>
					{photo.likes.includes(user._id) ? (
						<BsHeartFill />
					):(
						<BsHeart onClick={() => handleLike(photo)}/>
					)}
					<p>{photo.likes.length} like(s)</p>
				</>
			)}
		</div>
	)
}
export default Like