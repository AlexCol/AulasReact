import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useFetchDocuments } from '../../Hooks/useFetchDocuments';
import { useDeleteDocument } from '../../Hooks/useDeleteDocument';
import { useAuthValue } from '../../context/AuthContext';

function Dashboard() {
  const user = useAuthValue();  
  const uid = user?.uid;

  //posts do usuário
  const {documents: posts, loading, error} = useFetchDocuments("posts", null, uid);
  const {deleteDocument} = useDeleteDocument("posts");

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts.</p>
      {error && <p className='error'>{error}</p>}
      {loading && <p>Carregando...</p>}
      
      {posts && posts.length === 0 ? 
        (
          <div className={styles.noposts}>
              <p>Não foram encontrados posts.</p>
              <Link to="/post/create" className='btn'>Crie um novo post.</Link>
          </div>
        ) : ( 
          <>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>
            </div>

            {posts && posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
                  <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
                  <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>Deletar</button>
                </div>
              </div>
            ))}
          </>
        )}


      {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts.</p>
                        <Link to="/post/create" className='btn'>Crie um novo post.</Link>
                    </div>
                )}
    </div>
  )
}
export default Dashboard