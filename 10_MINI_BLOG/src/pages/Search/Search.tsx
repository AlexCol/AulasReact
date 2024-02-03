import styles from '../Home/Home.module.css'

import { Link } from "react-router-dom"
import { useQuery } from "../../Hooks/useQuery";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail/PostDetail";

const Search = () => {
    const query = useQuery();

    const {documents: posts} = useFetchDocuments("posts", query.get("s"));
    

    return (
        <div>
            <div className={styles.home}>
            {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>                        
                        <p className={styles.noposts}>Não foram encontrados posts com a hashtag pesquisada.</p>
                        <Link to="/post/create" className='btn'>Crie um novo post.</Link>
                    </div>
                )}                
            </div>
        </div>
    )
}
export default Search