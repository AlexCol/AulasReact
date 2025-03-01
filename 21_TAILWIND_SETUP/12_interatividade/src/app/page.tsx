import Image from "next/image";

export default function Home() {
  return (
    <div>

      <div className="m-4 text-black">
        {/* appearence-none remove o estilo padrão do selecte permite que você estilize o select da maneira que desejar*/}
        <select name="" id="" className="appearance-none">
          <option value="0">Selecione uma opção</option>
          <option value="1">Opção 1</option>
        </select>
      </div>
      <div className="m-4 text-black">
        <select name="" id="">
          <option value="0">Selecione uma opção</option>
          <option value="1">Opção 1</option>
        </select>
      </div>

      {/* cursor */}
      <div className="text-white">
        <div className="m-4 text-purple-300 cursor-pointer">Cursor pointer</div>
        <div className="m-4 text-orange-300 cursor-move">Cursor move</div>
        <div className="m-4 text-pink-300 cursor-not-allowed">Cursor not allowed</div>
        <div className="m-4 text-blue-300 cursor-wait">Cursor wait</div>
        <div className="m-4 text-green-300 cursor-text">Cursor text</div>
        <div className="m-4 text-yellow-300 cursor-help">Cursor help</div>
      </div>

      {/* hover */}
      <div className="text-white">
        <div className="m-4 text-purple-300 hover:bg-purple-500">Hover</div>
        <div className="m-4 text-orange-300 hover:bg-orange-500">Hover</div>
        <div className="m-4 text-pink-300 hover:bg-pink-500">Hover</div>
        <div className="m-4 text-blue-300 hover:bg-blue-500">Hover</div>
        <div className="m-4 text-green-300 hover:bg-green-500">Hover</div>
      </div>

      {/* outline-none = remove a borda padrão, permitindo adicionar personalizada*/}
      <div className="text-white">
        <input
          type="text"
          className="m-4 text-purple-700 outline-none"
          placeholder="Clica em mim" />
        <input
          type="text"
          className="m-4 text-purple-700 focus:outline-none focus:outline-red-700 "
          placeholder="Clica em mim 2" />
        <input
          type="text"
          className="m-4 text-purple-700 "
          placeholder="Clica em mim 3" />
      </div>

      {/* removendo pointer-events */}
      <div className="m-4 text-black">
        {/* appearence-none remove o estilo padrão do selecte permite que você estilize o select da maneira que desejar*/}
        <select name="" id="" className="pointer-events-none">
          <option value="0">Selecione uma opção - removendo pointer-events</option>
          <option value="1">Opção 1</option>
        </select>
      </div>
      <div className="m-4 text-black">
        <select name="" id="">
          <option value="0">Selecione uma opção - removendo pointer-events</option>
          <option value="1">Opção 1</option>
        </select>
      </div>
      <div className="m-4 bg-blue-300">
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="m-2 resize-none text-black pointer-events-none" />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="m-2 resize-y text-black" />
      </div>

      {/* select */}
      <div className="m-4 bg-red-300 text-orange-700">
        <p>Este paragrafo pode ser selecionado.</p>
        <p className="select-none">Este paragrafo NÃO pode ser selecionado.</p>
      </div>

    </div>
  );
}
