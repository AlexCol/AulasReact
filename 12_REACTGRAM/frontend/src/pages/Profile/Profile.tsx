import styles from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { IAuthSate } from '../../slices/authSlice';
import { useEffect, useState, } from 'react';
import { IPhotoSate, getUserPhotos } from '../../slices/photoSlice';
import { IUserSate, getUserDetails } from '../../slices/userSlice';
import ProfileHeader from './profileComponents/ProfileHeader';
import InsertPhotoForm from './profileComponents/InsertPhotoForm';
import PhotosList from './profileComponents/PhotosList';
import UpdatePhotoForm from './profileComponents/UpdatePhotoForm';
import { IPhotoData } from '../../interfaces/IPhotoData';


function Profile() {
	const {id} = useParams();
	const dispatch = useDispatch<AppDispatch>();

	const [photoToEdit, setPhotoToEdit] = useState<IPhotoData|null>(null);
	
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
					photoToEdit 
					?
					<UpdatePhotoForm photo={photoToEdit} errorPhoto={errorPhoto} messagePhoto={messagePhoto} setPhotoToEdit={setPhotoToEdit} />
					:
					<InsertPhotoForm errorPhoto={errorPhoto} loadingPhoto={loadingPhoto} messagePhoto={messagePhoto}/>
				)}
				<PhotosList photos={photos} currentUserId={authUser._id} searchedUserId={id} setPhotoToEdit={setPhotoToEdit}/>
			</>}
		</div>
		
	)
}
export default Profile