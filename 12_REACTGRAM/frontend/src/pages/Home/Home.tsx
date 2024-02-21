import styles from './Home.module.css';
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
import { useSelector } from "react-redux";
import { IAuthSate } from "../../slices/authSlice";
import { IPhotoSate, getPhotos, like } from "../../slices/photoSlice";
import { useEffect } from "react";
import { IPhotoData } from "../../interfaces/IPhotoData";
import { Link } from 'react-router-dom';
import PhotoItem from '../Photo/components/PhotoItem/PhotoItem';
import Like from '../Photo/components/Like/Like';

function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const resetMessage = useResetComponentMessage(dispatch);
	const {authUser} = useSelector<RootState, IAuthSate>((state) => state.auth);
	const {photos, loading} = useSelector<RootState, IPhotoSate>((state) => state.photo);

	useEffect(() => {
		dispatch(getPhotos());
	}, [dispatch]);
	const handleLike = (photo:IPhotoData) => {
		if (!photo._id) return;
		
		dispatch(like(photo._id));
		resetMessage();
	}
	if (loading) {
		return <p>Carregando...</p>
	}

	return (
		<>
		<div id={styles.home}>
			{photos && authUser && photos.map((photo) => (
				<div className={styles.photo} key={photo._id}>
					<PhotoItem photo={photo}/>					
					<Like photo={photo} user={authUser} handleLike={handleLike} fromHome={true}/>
					<Link className={`${styles.home_btn} ${'btn'}`} to={`/photos/${photo._id}`}>Ver Mais</Link>					
				</div>
			))}
			{photos && photos.length === 0 && (
				<h2 className={styles.no_photos}>
					Ainda não há fotos puclicadas, <Link to={`/users/${authUser?._id}`}><u>clique aqui</u>.</Link>
				</h2>
			)}
		</div>
		</>
	)
}
export default Home