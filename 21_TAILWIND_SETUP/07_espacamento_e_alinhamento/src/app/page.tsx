export default function Home() {
  return (
    <div>
      <p className="m-10">Alinhamento Horizontal</p>
      {/* Alinhamento Horizontal */}
      <div className="flex p-2 bg-red-300 justify-start">
        <div className="bg-red-600 p-4 m-4">1</div>
        <div className="bg-red-600 p-4 m-4">2</div>
        <div className="bg-red-600 p-4 m-4">3</div>
        <div className="bg-red-600 p-4 m-4">4</div>
      </div>
      <div className="flex p-2 bg-blue-300 justify-center">
        <div className="bg-blue-600 p-4 m-4">1</div>
        <div className="bg-blue-600 p-4 m-4">2</div>
        <div className="bg-blue-600 p-4 m-4">3</div>
        <div className="bg-blue-600 p-4 m-4">4</div>
      </div>
      <div className="flex p-2 bg-green-300 justify-end">
        <div className="bg-green-600 p-4 m-4">1</div>
        <div className="bg-green-600 p-4 m-4">2</div>
        <div className="bg-green-600 p-4 m-4">3</div>
        <div className="bg-green-600 p-4 m-4">4</div>
      </div>
      <div className="flex p-2 bg-purple-300 justify-between">
        <div className="bg-purple-600 p-4 m-4">1</div>
        <div className="bg-purple-600 p-4 m-4">2</div>
        <div className="bg-purple-600 p-4 m-4">3</div>
        <div className="bg-purple-600 p-4 m-4">4</div>
      </div>
      <div className="flex p-2 bg-yellow-300 justify-around">
        <div className="bg-yellow-600 p-4 m-4">1</div>
        <div className="bg-yellow-600 p-4 m-4">2</div>
        <div className="bg-yellow-600 p-4 m-4">3</div>
        <div className="bg-yellow-600 p-4 m-4">4</div>
      </div>
      <div className="flex p-2 bg-gray-300 justify-center">
        <div className="bg-red-600 p-4 m-4 border border-red-900">1</div>
        <div className="bg-blue-600 p-4 m-4 border border-blue-900">2</div>
        <div className="bg-green-600 p-4 m-4 border border-green-900">3</div>
        <div className="bg-red-600 p-4 m-4 border border-red-900">4</div>
        <div className="bg-blue-600 p-4 m-4 border border-blue-900">5</div>
        <div className="bg-green-600 p-4 m-4 border border-green-900">6</div>
      </div>

      <p className="m-10">Alinhamento Vertical</p>
      {/* Alinhamento Vertical */}
      <div className="bg-purple-300 h-40 flex flex-wrap content-start">
        <div className="bg-purple-600 h-10 p-2 m-4">1</div>
        <div className="bg-purple-600 h-10 p-2 m-4">2</div>
        <div className="bg-purple-600 h-10 p-2 m-4">3</div>
      </div>
      <div className="bg-yellow-300 h-40 flex flex-wrap content-center">
        <div className="bg-yellow-600 h-10 p-2 m-4">1</div>
        <div className="bg-yellow-600 h-10 p-2 m-4">2</div>
        <div className="bg-yellow-600 h-10 p-2 m-4">3</div>
      </div>
      <div className="bg-green-300 h-40 flex flex-wrap content-end">
        <div className="bg-green-600 h-10 p-2 m-4">1</div>
        <div className="bg-green-600 h-10 p-2 m-4">2</div>
        <div className="bg-green-600 h-10 p-2 m-4">3</div>
      </div>
      <div className="bg-red-300 h-40 flex flex-wrap content-between">
        <div className="bg-red-600 h-10 p-2 w-1/3">1</div>
        <div className="bg-red-600 h-10 p-2 w-1/3">2</div>
        <div className="bg-red-600 h-10 p-2 w-1/3">3</div>
        <div className="bg-red-600 h-10 p-2 w-1/3">4</div>
        <div className="bg-red-600 h-10 p-2 w-1/3">5</div>
        <div className="bg-red-600 h-10 p-2 w-1/3">6</div>
      </div>
      <div className="bg-blue-300 h-40 flex flex-wrap content-around">
        <div className="bg-blue-600 h-10 p-2 w-1/3">1</div>
        <div className="bg-blue-600 h-10 p-2 w-1/3">2</div>
        <div className="bg-blue-600 h-10 p-2 w-1/3">3</div>
        <div className="bg-blue-600 h-10 p-2 w-1/3">4</div>
        <div className="bg-blue-600 h-10 p-2 w-1/3">5</div>
        <div className="bg-blue-600 h-10 p-2 w-1/3">6</div>
      </div>

      <p className="m-10">Alinhamento Ambos Eixos</p>
      {/* items-start - alinha os itens no início do eixo Y (cima e baixo) */}
      {/* justify-end - alinha os itens no final do eixo X (esquerda e direita) */}
      <div className="bg-purple-400 flex h-40 items-start justify-end">
        <div className="bg-purple-600 p-2 m-4">1</div>
        <div className="bg-purple-600 p-2 m-4">2</div>
        <div className="bg-purple-600 p-2 m-4">3</div>
        <div className="bg-purple-600 p-2 m-4">4</div>
      </div>

      <p className="m-10">Alinhamento e espaçamento para Grid</p>
      {/* grid-cols-3 - divide a grid em 3 colunas */}
      <div className="grid bg-green-300 grid-cols-3 h-40 place-content-center">
        <div className="bg-green-600 p-4 m-2">1</div>
        <div className="bg-green-600 p-4 m-2">2</div>
        <div className="bg-green-600 p-4 m-2">3</div>
        <div className="bg-green-600 p-4 m-2">4</div>
        <div className="bg-green-600 p-4 m-2">5</div>
        <div className="bg-green-600 p-4 m-2">6</div>
      </div>

      <div className="grid bg-blue-300 grid-cols-3 h-48 place-content-between">
        <div className="bg-blue-600 p-2 m-2">1</div>
        <div className="bg-blue-600 p-2 m-2">2</div>
        <div className="bg-blue-600 p-2 m-2">3</div>
        <div className="bg-blue-600 p-2 m-2">4</div>
        <div className="bg-blue-600 p-2 m-2">5</div>
        <div className="bg-blue-600 p-2 m-2">6</div>
        <div className="bg-blue-600 p-2 m-2">7</div>
        <div className="bg-blue-600 p-2 m-2">8</div>
        <div className="bg-blue-600 p-2 m-2">9</div>
      </div>

      <div className="grid bg-pink-300 grid-cols-3 h-48 place-items-center">
        <div className="bg-pink-600 p-2 m-2">1</div>
        <div className="bg-pink-600 p-2 m-2">Testando</div>
        <div className="bg-pink-600 p-2 m-2">3</div>
        <div className="bg-pink-600 p-2 m-2">4</div>
        <div className="bg-pink-600 p-2 m-2">5</div>
        <div className="bg-pink-600 p-2 m-2">6</div>
      </div>

      <p className="m-10">Padding</p>
      <div className='bg-yellow-300 h-40 p-10 flex items-center justify-center'>
        <span className="bg-yellow-700 m-1 p-4">Padding</span>
        <span className="bg-yellow-800 m-1 px-4">Padding</span>
        <span className="bg-yellow-800 m-1 py-4">Padding</span>
        <span className="bg-yellow-800 m-1 px-4 py-2">Botão?</span>
        <span className="bg-yellow-900 pl-4 pt-6 pr-8 pb-10">Padding Custom</span>
      </div>
      <div className="bg-purple-300 h-20 flex items-center justify-center">
        <span className="
          bg-purple-950
          hover:bg-purple-400
          font-bold
          py-2
          px-4
          rounded-lg
          shadow-sm
          shadow-black
          hover:shadow-purple-900
          transition
          duration-500
          hover:cursor-pointer"
        >Meu Botão</span>
      </div>

      <p className="m-10">Margim</p>
      <div className="w-20 h-10 bg-green-900 text-center m-5">
        Margim
      </div>
      <div className="w-40 h-10 bg-yellow-900 text-center mx-10 xy-4">
        Margim X e Y
      </div>
      <div className="w-1/2 h-10 bg-blue-900 text-center mx-auto">
        Margim Para centralizar
      </div>
      <div className="h-10 bg-red-900 text-center mt-10 ml-5 mb-8 mr-48">
        Margim Left Top Rigth Bottom
      </div>
      <div className="bg-gray-300">
        <div className="w-20 bg-purple-600 mx-auto mt-5 flex justify-center">
          Oi
        </div>
      </div>

      <p className="m-10">Largura</p>
      <div className="bg-blue-700 font-bold p-4 mx-auto max-w-5xl">
        Max Width
      </div>
      <div className="bg-blue-300 font-bold p-4 mx-auto w-32 min-w-96">
        Min Width
      </div>

      <p className="m-10">Altura</p>
      <div className="bg-purple-300 font-bold p-4 mx-auto h-96 max-h-40">
        Max Height
      </div>
      <div className="bg-red-300 font-bold p-4 mx-auto h-24 min-h-40">
        Min Height
      </div>

      <p className="m-20">.</p>
      <p className="m-20">.</p>
      <p className="m-20">.</p>
      <p className="m-20">.</p>
    </div>
  );
}
