//+CSS
import styles from './Home.module.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchDocuments } from '../../Hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail/PostDetail';


const Home = () => {
    const [query, setQuery] = useState<string>("");
    const {documents: posts, error, loading} = useFetchDocuments("posts");
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(query) {
            navigate(`/search?s=${query}`);    
        }
    }
    
    return (
        <div className={styles.home}>
            <h1>Veja nossos posts mais recentes.</h1>
            {error && <p className='error'>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input 
                    type="text" 
                    placeholder='Ou busque por tags...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='btn btn-dark'>Pesquisar</button>
            </form>
            <div>
                {loading && <p>Carregando...</p>}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts.</p>
                        <Link to="/post/create" className='btn'>Crie um novo post.</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Home