import styles from './PostDetail.module.css';
import { IDocument } from "../../Interfaces/IDocument";
import { Link } from 'react-router-dom';

interface IDocumentProp {
    post: IDocument
}

const PostDetail = ({post}: IDocumentProp) => {
  return (
    <div className={styles.post_detail}>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div className='tags'>
            {post.tags.map((tag, index) => (
                <p key={index}>
                    <span>#</span>{tag}
                </p>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>
    </div>
  )
}
export default PostDetail