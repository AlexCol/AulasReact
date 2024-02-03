import styles from './Post.module.css';

import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../Hooks/useFetchDocument";

const Post = () => {
    const { id } = useParams();
    if (!id) return;

    const {document: post, loading, error} = useFetchDocument("posts", id);

    return (    
    <div className={styles.post_container}>
        {loading && <p>Carregando...</p>}
        {error && <p className='error'>{error}</p>}
        {post &&
            <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p dangerouslySetInnerHTML={{__html: post.body}}></p>
            <h3>Esse post trata sobre:</h3>
            <div className={styles.tags}>
                {post.tags.map((tag, index) => (
                    <p key={index}><span>#</span>{tag}</p>
                ))}
            </div>
            </>
        }
    </div>
  )
}
export default Post


/*
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
*/