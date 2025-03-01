import Image from "next/image";

export default function Home() {
  return (
    <div>
      Cores configuradas no global.css

      <p className="text-orange-500">Laranja sobrescrito para branco</p>

      <div className="
        bg-gray-800
        text-white
        hover:bg-amber-400
        p-4
        dark:bg-gray-200
        dark:text-black
        dark:hover:bg-purple-400
        "
      >
        Teste para mudar para dark mode
      </div>

      <p className="cursor-pointer dark:cursor-not-allowed">
        Se no darkMode, mouse fica click, senão no proibido'
      </p>
    </div >
  );
}
