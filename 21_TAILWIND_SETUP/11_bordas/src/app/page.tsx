import Image from "next/image";

export default function Home() {
  const baseBotaoTailwindClasses = "m-4 p-4 bg-orange-400 cursor-pointer";
  const centerTextTailwindClasses = "content-evenly text-center";
  const baseSpanTailtWindClasses = `${centerTextTailwindClasses} bg-green-400 h-20 block m-4 rounded-full  text-black`;
  const baseSpanBorderTailtWindClasses = `${centerTextTailwindClasses} bg-blue-400 w-40 h-20 block m-4 text-black`;

  return (
    <div>
      <div>
        <button className={`${baseBotaoTailwindClasses} rounded-sm`}>Testando Menor</button>
        <button className={`${baseBotaoTailwindClasses} rounded`}>Testando</button>
        <button className={`${baseBotaoTailwindClasses} rounded-xl`}>Testando xl</button>
        <button className={`${baseBotaoTailwindClasses} rounded-4xl`}>Testando 4xl</button>
      </div>

      <div>
        <span className={`${baseSpanTailtWindClasses} w-20`}>Circular</span>
        <span className={`${baseSpanTailtWindClasses} w-40`}>Pílula</span>
      </div>

      <div>
        <span className={`${baseSpanBorderTailtWindClasses} border-4 border-amber-600`}>Botão</span>
        <span className={`${baseSpanBorderTailtWindClasses} border-4 border-amber-600 rounded-lg`}>Botão</span>
      </div>

      <div>
        <span className={`${baseSpanBorderTailtWindClasses} border-4 border-purple-600 border-double`}>Botão</span>
        <span className={`${baseSpanBorderTailtWindClasses} border-4 border-purple-600 border-dashed`}>Botão</span>
        <span className={`${baseSpanBorderTailtWindClasses} border-4 border-purple-600 border-dotted`}>Botão</span>
      </div>

      <div className="grid grid-cols-4 divide-x-4 divide-blue-300 divide-dotted">
        <div className="text-center">Separador</div>
        <div className="text-center">Eixo X</div>
        <div className="text-center">Para</div>
        <div className="text-center">Colunas</div>
      </div>

      <div>--</div>

      <div className="divide-y-4 divide-purple-300 divide-dashed animate-pulse-divider">
        <div className="text-center">Separador</div>
        <div className="text-center">Eixo Y</div>
        <div className="text-center">Para</div>
        <div className="text-center">Linhas</div>
      </div>

      <div>
        <div className="shadow-sm shadow-white h-20 m-6">Sombra Média</div>
        <div className="shadow-md shadow-white h-20 m-6">Sombra pequena</div>
        <div className="shadow-2xl shadow-white h-20 m-6">Sombra 4xl</div>
      </div>
    </div>
  );
}
