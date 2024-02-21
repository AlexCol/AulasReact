import { Link } from 'react-router-dom';
import { IPhotoData } from '../../../../interfaces/IPhotoData';
import { uploads } from '../../../../utils/config';
import styles from '../../Photo.module.css';
import { useRef } from 'react';

interface ICommentProps {
	photo: IPhotoData,
	handleComment: Function
}

function Comment({photo, handleComment}: ICommentProps) {
	const commentRef = useRef<HTMLInputElement>(null);
	return (
		<div className={styles.comments}>
        {photo.comments && (
          <>
            <h3>Comentários ({photo.comments.length}):</h3>
            <form onSubmit={(e) => handleComment(e, photo._id, commentRef.current?.value)}>
              <input
                type="text"
                placeholder="Insira seu comentário..."
                required
								ref={commentRef}
              />
              <input type="submit" value="Enviar" />
            </form>
            {photo.comments.length === 0 && <p>Não há comentários...</p>}
            {photo.comments.map((comment) => (
              <div className={styles.comment} key={comment.comment}>
                <div className={styles.author}>
                  {comment.userImage && (
                    <img
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={comment.userName}
                    />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    <p>{comment.userName}</p>
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
	)
}
export default Comment