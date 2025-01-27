import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mainTailwindClass = `
    flex
    flex-col 
    justify-center 
    text-center 
    py-40 
    px-4 
    bg-purple-main
    text-green-main
    bg-spotify-theme-mobile 
    bg-banner-mobile
    bg-195%
    md:bg-spotify-theme
    md:bg-banner    
    md:bg-175%
  `;

  const linkTailwindClass = `
    bg-green-main 
    hover:bg-white 
    text-purple-main 
    rounded-full 
    px-10 
    py-3 
    uppercase 
    font-bold
    max-w-xl
    mx-auto
    tracking-widest
    transition duration-500
  `;
  return (
    <main>
      <div className={mainTailwindClass}>
        <h1 className="text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none">Escutar muda tudo</h1>
        <p className="md:text-lg mb-10">Mihões de músicas e podcasts para explorar.  E nem precisa de cartão de crédito para explorar</p>
        <Link href='#' className={linkTailwindClass}>Obtenha o Spotify Free</Link>
      </div>
    </main>
  );
}
