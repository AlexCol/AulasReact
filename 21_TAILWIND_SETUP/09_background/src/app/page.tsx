export default function Home() {
  const bg = 'url(/imgs/bg_cidade.jpg)';
  const tailwindBg = 'url(/imgs/tailwind.png)';
  const overFlowTaildClass = 'h-48 overflow-auto';
  const localOverFlowTaildClass = `${overFlowTaildClass} bg-local`;
  const fixedOverFlowTaildClass = `${overFlowTaildClass} bg-fixed`;

  return (
    <div>
      {/* div com imagem local - somente conteudo se mexe */}
      <div className={localOverFlowTaildClass} style={{ backgroundImage: bg }}>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
      </div>

      {/* div com imagem fixa - conteudo e imagem se mexem */}
      <div className={fixedOverFlowTaildClass} style={{ backgroundImage: bg }}>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
      </div>

      {/* */}
      <div className={localOverFlowTaildClass} style={{ backgroundImage: bg }}>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <div className={fixedOverFlowTaildClass} style={{ backgroundImage: bg }}>
          <p className="text-black p-10">Misturando div fixa com local.</p>
        </div>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
      </div>

      {/* Cores e opacidade */}
      <div className="h-10 bg-green-100"></div>
      <div className="h-10 bg-green-200"></div>
      <div className="h-10 bg-green-300"></div>
      <div className="h-10 bg-green-400"></div>
      <div className="h-10 bg-green-500"></div>
      <div className="h-10 bg-green-600"></div>
      <div className="h-10 bg-green-700"></div>
      <div className="h-10 bg-green-800"></div>
      <div className="h-10 bg-green-900"></div>
      <div className="h-10 bg-green-900 bg-opacity-0">Totalmente opaca.</div>
      <div className="h-10 bg-green-900 bg-opacity-25">Opacidade 25%</div>
      <div className="h-10 bg-green-900 bg-opacity-75">Opacidade 75%</div>

      {/* Posição e repetição */}
      <div className={`${fixedOverFlowTaildClass} bg-right-bottom`} style={{ backgroundImage: bg }}>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
      </div>

      <div className={`${overFlowTaildClass} bg-local bg-repeat-y`} style={{ backgroundImage: tailwindBg }}>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
        <p className="text-black p-10">Testanto</p>
      </div>

      {/* Tamanho */}
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: bg }}>
      </div>
      <div className="h-48 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: bg }}>
      </div>

      {/* Degrade */}
      <div className="h-48 bg-gradient-to-tr from-gray-700 to-red-400"></div>
      <div className="h-48 bg-gradient-to-b from-blue-500 via-green-600 to-yellow-400"></div>

      {/* Usando img da configuração */}
      <div className="h-48 bg-city"></div>
      <div className="h-48 bg-tailwind"></div>

      {/* Espaçamento */}

      <p className="text-black-2">espaçamento</p>
      <p className="text-black-2">espaçamento</p>
      <p className="text-black-2">espaçamento</p>
      <p className="text-black-2">espaçamento</p>
    </div>
  );
}
