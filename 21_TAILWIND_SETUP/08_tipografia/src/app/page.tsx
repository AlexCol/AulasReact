import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* fontes */}
      <p className="text-xl font-serif">Testando fonte serifada</p>
      <p className="text-xl font-sans">Testando fonte sem serifa</p>
      <p className="text-xl font-mono">Testando fonte monospace</p>

      {/*fontes customizadas na tailwind.config.js*/}
      <p className="text-xl font-arial">Testando fonte Arial</p>

      {/*tamanho*/}
      <p className="text-xs">Texto extra pequeno</p>
      <p className="text-sm">Texto pequeno</p>
      <p className="text-base">Texto base</p>
      <p className="text-lg">Texto grande</p>
      <p className="text-xl">Texto extra grande</p>

      {/*adicionado para que fique oculto e não atrapalhe a visualização do resto do curso*/}
      {false && (
        <>
          <p className="text-2xl">Texto 2x grande</p>
          <p className="text-3xl">Texto 3x grande</p>
          <p className="text-4xl">Texto 4x grande</p>
          <p className="text-5xl">Texto 5x grande</p>
          <p className="text-6xl">Texto 6x grande</p>
          <p className="text-7xl">Texto 7x grande</p>
          <p className="text-8xl">Texto 8x grande</p>
          <p className="text-9xl">Texto 9x grande</p>
        </>)}

      <p className="font-mono text-xl p-4 bg-gray-600">Exercicio</p>

      {/*estilo e weight*/}
      <p className="text-xl italic">Texto Itálico</p>
      <p className="text-xl italic font-bold">Texto Itálico e Negrito</p>
      <p className="text-xl font-bold">Texto Negrito</p>
      <p className="text-xl font-semibold">Texto Semi Negrito</p>

      {/*Letter Spacing*/}
      <p className="text-xl tracking-tighter">Texto com espaçamento apertado</p>
      <p className="text-xl tracking-tight">Texto com espaçamento apertado</p>
      <p className="text-xl tracking-normal">Texto com espaçamento normal</p>
      <p className="text-xl tracking-wide">Texto com espaçamento largo</p>
      <p className="text-xl tracking-wider">Texto com espaçamento mais largo</p>
      <p className="text-xl tracking-widest">Texto com espaçamento mais largo</p>

      {/*Line Height*/}
      <p className="text-xl leading-3">Texto com line-height 3</p>
      <p className="text-xl leading-4">Texto com line-height 4</p>
      <p className="text-xl leading-5">Texto com line-height 5</p>
      <p className="text-xl leading-6">Texto com line-height 6</p>
      <p className="text-xl leading-7">Texto com line-height 7</p>
      <p className="text-xl leading-8">Texto com line-height 8</p>
      <p className="m-4 p-4 text-sm italic leading-10 text-red-500 bg-gray-400">Exercicio</p>

      {/* Listas */}
      <ul className="list-disc m-10 bg-green-800">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul className="list-decimal m-10 bg-red-800">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul className="list-none m-10 bg-blue-800">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul className="list-disc list-inside m-10 bg-pink-800">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      {/* Placeholder */}
      <input
        type="text"
        placeholder="Digite seu nome"
        className="
          p-2
          m-2
          bg-gray-200
          placeholder-red-900
          text-purple-900
          placeholder-opacity-70
        "
      />

      {/* Alinhamento */}
      <p className="text-xl text-center bg-gray-900">Texto centralizado</p>
      <p className="text-xl text-left bg-purple-900">Texto alinhado à esquerda</p>
      <p className="text-xl text-right bg-blue-900">Texto alinhado à direita</p>

      {/* Cores */}
      <p className="text-xl text-red-500">Texto vermelho</p>
      <p className="text-xl text-green-500">Texto verde</p>
      <p className="text-xl text-blue-500">Texto azul</p>
      <p className="text-xl text-yellow-500">Texto amarelo</p>

      {/* Decorations */}
      <p className="text-xl underline">Texto sublinhado</p>
      <p className="text-xl line-through">Texto com linha no meio</p>
      <p className="lowercase">TEXTO CONVERTIDO PARA MINUSCULO</p>
      <p className="uppercase">texto convertido para maiusculo</p>

      <p className="text-black-2">espaçamento</p>
      <p className="text-black-2">espaçamento</p>
      <p className="text-black-2">espaçamento</p>
      <p className="text-black-2">espaçamento</p>
    </div>
  );
}
