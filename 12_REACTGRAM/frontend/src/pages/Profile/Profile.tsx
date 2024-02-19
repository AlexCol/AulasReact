import styles from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { IAuthSate } from '../../slices/authSlice';
import { useEffect, } from 'react';
import { IPhotoSate, getUserPhotos } from '../../slices/photoSlice';
import { IUserSate, getUserDetails } from '../../slices/userSlice';
import ProfileHeader from './profileComponents/ProfileHeader';
import InsertPhotoForm from './profileComponents/InsertPhotoForm';
import PhotosList from './profileComponents/PhotosList';


function Profile() {
	const {id} = useParams();
	const dispatch = useDispatch<AppDispatch>();
	
	//!use selectors
	const { authUser } = useSelector<RootState, IAuthSate>((state) => state.auth);
	const { user, loading } = useSelector<RootState, IUserSate>((state) => state.user);
	const {photos, photo, loading: loadingPhoto, message: messagePhoto, error: errorPhoto} = useSelector<RootState, IPhotoSate>((state) => state.photo);

	//! load user data
	useEffect(() => {
		if (!id) return;
		dispatch(getUserDetails(id));
		dispatch(getUserPhotos(id));
	}, [dispatch, id]);

	//!check if loading user
	if(loading) return <p>Carregando...</p>;
	
	return (
		<div id={styles.profile}>
			{authUser && id && <>
				<ProfileHeader user={user} />
				{id === authUser?._id && (
					<InsertPhotoForm errorPhoto={errorPhoto} loadingPhoto={loadingPhoto} messagePhoto={messagePhoto}/>				
				)}
				<PhotosList photos={photos} photo={photo} currentUserId={authUser._id} searchedUserId={id}/>
			</>}
		</div>
		
	)
}
export default Profile