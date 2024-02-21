import { useParams } from 'react-router-dom';
import styles from './Photo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IAuthSate } from '../../slices/authSlice';
import { IPhotoSate, comment, getPhoto, like } from '../../slices/photoSlice';
import { FormEvent, useEffect } from 'react';
import PhotoItem from './components/PhotoItem/PhotoItem';
import MessageComponent from './components/MessageComponent/MessageComponent';
import { IPhotoData } from '../../interfaces/IPhotoData';
import Like from './components/Like/Like';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';
import Comment from './components/Comments/Comment';

function Photo() {
	const {id} = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const { authUser } = useSelector<RootState, IAuthSate>((state) => state.auth);
	const {photo, loading, message, error} = useSelector<RootState, IPhotoSate>((state) => state.photo);
	const resetMessage = useResetComponentMessage(dispatch);


	//!load photo data
	useEffect(() => {
		if(!id) return;

		dispatch(getPhoto(id))
	}, [id, dispatch])

	//!like e comentário
	function handleLike(photo: IPhotoData) {
		if(photo._id) {
			dispatch(like(photo._id));
			resetMessage();
		}
	}
	function handleComment(event: FormEvent<HTMLFormElement>, photoId?: string, newComment?: string) {
		event.preventDefault();
		if(!newComment || !photoId) return;
		dispatch(comment({id: photoId, comment: newComment}));
		resetMessage();
	};

	//!loading
	if (loading) 
		return <p>Carregando...</p>

	return (
		<div id={styles.photo}>
			{photo && authUser && (
				<>
					<PhotoItem photo={photo} />
					<Like photo={photo} user={authUser} handleLike={handleLike}/>
					<MessageComponent message={message} error={error} />
					<Comment photo={photo} handleComment={handleComment}/>
				</>
			)}
		</div>
	)
}
export default Photo