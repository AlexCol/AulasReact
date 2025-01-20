import Image from "next/image";

export default function Home() {
  const divContainerTailwindClass = `
    container 
    bg-red-300 
    mx-auto
    p-4
    my-4
    text-red-900
    border-red-600
    border-2
    rounded-lg
    hover:bg-red-400
    hover:border-blue-900
    transition-colors 
    duration-500
  `;

  const divExeTailwindClass = `
    container
    bg-green-900
    border-green-400
    hover:bg-yellow-500
    md:bg-blue-900
    md:border-blue-400
    hover:md:bg-red-500
    
    border-2
    mx-auto    
    p-4
    rounded-lg
    text-white
    transition-colors
    duration-500
  `;

  return (
    <>
      <div className={divContainerTailwindClass}>
        Texto container.
      </div>

      <div className={divExeTailwindClass}>
        Texto exe.
      </div>

      <div className="container mx-auto bg-purple-700 border-2 border-purple-900 m-4 box-border p-10">
        <p className="border-2 border-black">Border Box</p>
      </div>
      <div className="container mx-auto bg-teal-700 border-2 border-teal-900 m-4 box-content p-10">
        <p className="border-2 border-black">Box content.</p>
      </div>

      <div className="container mx-auto">
        <span className="block bg-red-300">Elementos inline, tornados de bloco com 'block'</span>
        <span className="block bg-red-300">Elementos inline, tornados de bloco com 'block'</span>
        <div className="bg-blue-500 inline-block mx-1">Elemento bloco transformado em inline</div>
        <div className="bg-blue-500 inline-block mx-1">Elemento bloco transformado em inline</div>
        <div className="bg-green-700 hidden">Estou aparecendo (ou não).</div>
      </div>

      <div className="container mx-auto bg-red-200 m-6 p-6">
        <div className="bg-red-500 inline-block mx-1">Elemento bloco transformado em inline</div>
        <div className="bg-purple-500 inline-block mx-1">Elemento bloco transformado em inline</div>
        <div className="bg-yellow-500 inline-block mx-1">Elemento bloco transformado em inline</div>
      </div>

      <div className="bg-gray-500 float-right">Float right</div>
      <div className="bg-gray-700 float-left">Float Left</div>
      <p className="clear-start"></p>

      <div className="overflow-y-auto h-16 m-6">
        <p>Testado overflow1</p>
        <p>Testado overflow2</p>
        <p>Testado overflow3</p>
        <p>Testado overflow4</p>
        <p>Testado overflow5</p>
        <p>Testado overflow6</p>
        <p>Testado overflow7</p>
      </div>

      <div className="overflow-x-auto h-16 m-6">
        <p>Testado overflowxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>

      <div className="relative bg-blue-500">
        Im relative!
        <div className="absolute top-0 right-0 bg-pink-900">
          Im absolute!
        </div>
      </div>

      <div className="relative h-20 bg-gray-300">
        <div className="absolute bottom-0 right-0 bg-pink-900">
          Im absolute to this div! And to force me inside this div, the outside div must be relative.
        </div>
      </div>
    </>
  );
}
