import { FormEvent, useState } from 'react'
import './App.css'
import IProduct from './Interface/IProduct';
import useCustomFetch from './Hooks/useCustomFetch';


function App() {
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);

  //+ 4 - custom hooks  
  const {mainData: itens, executa, loading, error} = useCustomFetch();
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+ 2 - add de produtos
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product: IProduct = {
      id: "0",
      name: productName,
      price: productPrice
    }
    executa(product, "POST");
  
    setProductName('');
    setProductPrice(0);
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>, prod:IProduct) => {
    e.preventDefault();
    executa(prod, "DELETE");
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && <ul>
        {
          itens && itens.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button onClick={(e) => ( handleDelete(e, product))}>Delete</button>              
            </li>
          ))            
        }
      </ul>
      }
      <div className='add_product'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input 
            name="name" 
            type="text" 
            placeholder='Inform name.' 
            value={productName}
            required
            onChange={(e) => setProductName(e.target.value)}/>

          <label htmlFor="price">Preço:</label>
          <input 
            name="price" 
            type="number" 
            placeholder='Inform price.' 
            required
            value={(productPrice <= 0 ? '' : productPrice)}
            onChange={(e) => setProductPrice(Number.parseFloat(e.target.value))}/>
          
          <input 
            type="submit" 
            disabled = {loading ? true : false}
            value={loading ? "Aguarde" : "Criar"}/>
        </form>        
      </div>
    </div>
  )
}

export default App
