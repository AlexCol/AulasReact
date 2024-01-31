//import styles from './CreatePost.module.css';
import { useState } from "react"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [formError, setFormError] = useState<string>('');

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <div>
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
        
        <ReactQuill 
          className="quill" 
          theme="snow" 
          value={body} 
          onChange={(e) => setBody(e)}
          placeholder="Digite sua mensagem."
        />
      </form>
    </div>
  )
}
export default CreatePost