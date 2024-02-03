import styles from './CreatePost.module.css';
import { useState } from "react"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useInsertDocument } from '../../Hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext';

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [tags, setTags] = useState<string>();
  const [postError, setPostError] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const {insertDocument, response} = useInsertDocument("posts");
  const user = useAuthValue();
  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    
    if (!title || !image || !tags) {
      setFormError("Todos os campos precisam ser preenchidos.");
      return;
    }
    
    if (body === '<p><br></p>' || body === '') {
      setPostError("Mensagem no Post é obrigatória.");
      return;
    }

    //+validando url da imagem
    try {
      new URL(image);
    } catch {
      setFormError("Url da imagem não é valido.");
      return;
    }

    //++ tags array
    const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: (user?.uid) ? user?.uid : '',
      createdBy: (user?.displayName) ? user?.displayName : ''
    });

    // setTitle('');
    // setImage('');
    // setBody('');
    // setTags('');
    // setFormError('');
    navigate('/');
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">
          <span>Título:</span>
          <input
              type="text"
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder='Pense num bom titulo...'
          />
        </label>
        <label htmlFor="image">
          <span>Url da Imagem:</span>
          <input
              type="text"
              id='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              placeholder='Coloque o link de sua imagem.'
          />
        </label>
        <label htmlFor="body">
          <span>Conteúdo:</span>
          {postError && <p className='error'>{postError}</p>}
          <ReactQuill 
            id="body"
            className="quill ql-bg-purple" 
            theme="snow" 
            value={body} 
            onChange={(e) => setBody(e)}
            placeholder="Digite sua mensagem."
          />          
        </label>
        <label htmlFor="tags">
          <span>Tags:</span>
            <input
                type="text"
                id='tags'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
                placeholder='Insira suas tags separadas por virgula.'
            />
        </label>        
      {!response.loading && <button className="btn">Postar</button>}
      {response.loading && <button className="btn" disabled>Aguarde...</button>}
      {formError && <p className='error'>{formError}</p>}
      
      </form>
      
      
    </div>
  )
}
export default CreatePost