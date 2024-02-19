import { IUserData } from '../../../interfaces/IUserData';
import { uploads } from '../../../utils/config';
import styles from '../Profile.module.css'

interface IProfileHeader {
	user: IUserData|null
}

function ProfileHeader({user}: IProfileHeader) {
	return (
		<div className={styles.profile_header}>
		{user?.profileImage && (
			<img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
		)}
		<div className={styles.profile_description}>
			<h2>{user?.name}</h2>
			<p>{user?.bio}</p>
		</div>
	</div>
	)
}
export default ProfileHeader