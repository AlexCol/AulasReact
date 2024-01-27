import { Link, useParams } from "react-router-dom"
import useCustomFetch from "../../Hooks/useCustomFetch";

const Product = () => {
  const { prod_id } = useParams();
  const {mainData: product, loading, error} = useCustomFetch(prod_id);

  return (
    <>
      ProductId: {prod_id}
      {error && <p>{error}</p>}
      {loading && <p>Carregando dados...</p>}
      {product[0] && 
        <div>
          <h2>{product[0].name}</h2>
          <p>R$ {product[0].price}</p>
          <Link to={`/products/${product[0].id}/info`}>Mais Informações</Link>
        </div>
      }
    </>
  )
}

export default Product