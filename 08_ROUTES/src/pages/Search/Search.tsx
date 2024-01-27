import { Link, useSearchParams } from "react-router-dom"
import useCustomFetch from "../../Hooks/useCustomFetch";

const Search = () => {
    const [searchParams] = useSearchParams();
    const {mainData: products, loading, error} = useCustomFetch("?"+searchParams.toString());
    return (
        <div>
            <h1>Resultados disponíveis.</h1>
            {error && <p>{error}</p>}
            {loading && <p>Carregando dados.</p>}
            <ul className="products">
                {products && products.map(item => (
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

export default Search