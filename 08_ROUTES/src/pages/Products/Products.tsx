import './Products.css'
import useCustomFetch from "../../Hooks/useCustomFetch";
import { Link } from 'react-router-dom';

const Products = () => {
    const {mainData: itens, loading, error} = useCustomFetch();

    return (
        <div>
            <h1>Products</h1>
            {error && <p>{error}</p>}
            {loading && <p>Carregando dados.</p>}
            <ul className="products">
                {itens && itens.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Products