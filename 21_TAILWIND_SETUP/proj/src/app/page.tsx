'use client';

export default function Home() {
  const divTailwindClass = `
    flex  
    flex-col
    items-center
    justify-center
  bg-gray-500 
  text-white 
    h-screen
  `;

  const h1TailwindClass = `
    w-1/2
    bg-green-500 
    text-red-500 
    hover:bg-red-300 
    hover:text-green-500 
    transition-colors duration-500
  `;

  const buttonTailwindClass = `
    text-white   
    transition-colors duration-500
    font-bold
    py-2
    px-4
    rounded-lg
  `;

  const blueButtonTailwindClass = `
    bg-blue-500 
    hover:bg-blue-300 
    hover:text-blue-500 
    ${buttonTailwindClass}
  `;

  const redButtonTailwindClass = `
    bg-red-500 
    hover:bg-red-300 
    hover:text-red-500 
    ${buttonTailwindClass}
  `;

  const greenButtonTailwindClass = `
    bg-green-500
    hover:bg-green-300 
    hover:text-green-500 
    ${buttonTailwindClass}
  `;

  const multiSizeDivTailwindClass = `
    w-4
    md:w-6 h-4
    md:h-6 m-4
    bg-green-500
    md:bg-blue-600
    lg:bg-red-500
    xl:bg-yellow-500
  `;

  return (
    <div className={divTailwindClass}>
      <h1 className={h1TailwindClass}>Tudo são classes</h1>
      <button className={blueButtonTailwindClass} onClick={() => alert("Hello tailwind!")}>Botão</button>
      <button className={redButtonTailwindClass} onClick={() => alert("Hello tailwind!")}>Botão</button>
      <button className={greenButtonTailwindClass} onClick={() => alert("Hello tailwind!")}>Botão</button>

      <div className={multiSizeDivTailwindClass}>

      </div>
    </div >
  );
}
