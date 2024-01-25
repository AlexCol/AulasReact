import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import api from './Axios';
import { AxiosRequestConfig } from 'axios';

interface IProduct {
  id?: number,
  name: string,
  price: number
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+ 1 - resgatando dados com axios
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get<IProduct[]>("products");
      const data = res.data;
      setProducts(
        (Array.isArray(data)) ? data : [data]
      );
    };
    fetchData();
  }, []);

  /*
  //+ 1.1 - resgatando dados com fecth
  useEffect(() => {
    const baseUrl:string = "http://localhost:3005";
    const fetchData = async () => {
      const urlPraChamar = `${baseUrl}/products`;
      const res = await fetch(urlPraChamar);
      const data = await res.json();
      console.log(data);
    }

    fetchData();
  }, []);
*/

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+ 2 - add de produtos+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let nextId: number;
    const data = (await api.get("products")).data;
    if (!Array.isArray(data))
      nextId = data.id+1;
    else {
      const ids:number[] = data.map(prd => prd.id);
      nextId = Math.max(...ids)+1;
    }
    
    const product: IProduct = {
      id: nextId,
      name: productName,
      price: productPrice
    }
    const res = await api.post("products", product);

    setProductName('');
    setProductPrice(0);
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))
        }
      </ul>
      <div className='add_product'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input 
            name="name" 
            type="text" 
            placeholder='Inform name.' 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}/>

          <label htmlFor="price">Preço:</label>
          <input 
            name="price" 
            type="number" 
            placeholder='Inform price.' 
            value={(productPrice <= 0 ? '' : productPrice)}
            onChange={(e) => setProductPrice(Number.parseFloat(e.target.value))}/>
          
          <input type="submit" value="Criar"/>
        </form>
        
      </div>
    </div>
  )
}

export default App
