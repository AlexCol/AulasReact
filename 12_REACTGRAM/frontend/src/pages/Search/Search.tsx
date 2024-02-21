import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { useQuery } from '../../hooks/useQuery';
import { AppDispatch, RootState } from '../../store';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';
import { useSelector } from 'react-redux';
import { IAuthSate } from '../../slices/authSlice';
import { IPhotoSate, like, searchPhotos } from '../../slices/photoSlice';
import { useEffect } from 'react';
import PhotoItem from '../Photo/components/PhotoItem/PhotoItem';
import Like from '../Photo/components/Like/Like';
import { Link } from 'react-router-dom';
import { IPhotoData } from '../../interfaces/IPhotoData';

function Search() {
	const query = useQuery();
	const search = query.get('q');
	const dispatch = useDispatch<AppDispatch>();
	const resetMessage = useResetComponentMessage(dispatch);
	const {authUser} = useSelector<RootState, IAuthSate>(state => state.auth);
	const {photos, loading} = useSelector<RootState, IPhotoSate>((state)=> state.photo);

	console.log(photos);
	useEffect(() => {
		if(!search) return;
		dispatch(searchPhotos(search));
	}, [dispatch, search]);
	
	const handleLike = (photo:IPhotoData) => {
		if (!photo._id) return;		
		dispatch(like(photo._id));
		resetMessage();
	}
	if (loading) {
		return <p>Carregando...</p>
	}

	return (
		<div id={styles.search}>
			<h2>Você está buscando por: {search}</h2>
			{photos && authUser && photos.map((photo) => (
				<div className={styles.photo} key={photo._id}>
					<PhotoItem photo={photo}/>					
					<Like photo={photo} user={authUser} handleLike={handleLike} fromHome={true}/>
					<Link className={`${styles.search_btn} ${'btn'}`} to={`/photos/${photo._id}`}>Ver Mais</Link>					
				</div>
			))}
			{photos && photos.length === 0 && (
				<h2 className={styles.no_photos}>
					Ainda não há fotos encontradas com essa busca, <Link to={`/users/${authUser?._id}`}><u>clique aqui</u></Link> para publicar.
				</h2>
			)}
		</div>
	)
}
export default Search