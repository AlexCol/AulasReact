//importando imagem de assets (necessário criar o arquivo Global.d.ts - pois com typescript ele não é reconhecido)
import City from '../assets/city.jpg'

const Images = () => {
  return (
    <>
        <div>
        {/*se a imagem estiver em public, pode ser acessada direta com a barra*/}
            <img src="/img1.jpg" alt="Imagem" /> 
        </div>
        
        {/*importando imagem de assets (necessário criar o arquivo Global.d.ts - pois com typescript ele não é reconhecido)*/}
        <div>
            <img src={City} alt="Cidade" />
        </div>
    </>
  )
}

export default Images