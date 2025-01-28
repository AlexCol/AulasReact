import Link from 'next/link'
import React from 'react'

function Footer() {
  const h3TailwindClass = `
    uppercase
    text-gray-500
    font-bold
    text-xs
    tracking-widest
    mb-5
  `;

  const liTailwindClass = `mb-5`;

  return (
    <footer>
      <div className='grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20'>
        <div className={'md:col-span-1 pt-10 md:pt-0'}>
          <Link href='#'>
            <img src="imgs/spotify-logo.png" alt="Spotify" className='w-20 md:w-132px' />
          </Link>
        </div>

        <div className={'md:col-span-1 pt-10 md:pt-4'}>
          <h3 className={h3TailwindClass}>Empresa</h3>
          <ul>
            <li className={liTailwindClass}>
              <Link href='#'>Sobre</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>Empregos</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>For the Record</Link>
            </li>
          </ul>
        </div>

        <div className={'md:col-span-1 pt-10 md:pt-4'}>
          <h3 className={h3TailwindClass}>Comunidades</h3>
          <ul>
            <li className={liTailwindClass}>
              <Link href='#'>Para Artistas</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>Desenvolvedores</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>Investidores</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>Fornecedores</Link>
            </li>
          </ul>
        </div>

        <div className={'md:col-span-1 pt-10 md:pt-4'}>
          <h3 className={h3TailwindClass}>Links Úteis</h3>
          <ul>
            <li className={liTailwindClass}>
              <Link href='#'>Ajuda</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>Player da Web</Link>
            </li>
            <li className={liTailwindClass}>
              <Link href='#'>Aplicativo móvel grátis</Link>
            </li>
          </ul>
        </div>

        <div className={'md:col-span-2 pt-10 md:pt-4'}>
          <ul className='flex md:justify-end'>
            <li className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2'>
              <Link href='#'><i className='fab fa-instagram'></i></Link>
            </li>
            <li className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2'>
              <Link href='#'><i className='fab fa-twitter'></i></Link>
            </li>
            <li className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2'>
              <Link href='#'><i className='fab fa-facebook'></i></Link>
            </li>
          </ul>
        </div>

        <div className={'md:col-span-4 mt-20'}>
          <ul>
            <li className="inline-block text-xs text-gray-600 mr-4">
              <Link href='#'>Legal</Link>
            </li>
            <li className="inline-block text-xs text-gray-600 mr-4">
              <Link href='#'>Central de Privacidade</Link>
            </li>
            <li className="inline-block text-xs text-gray-600 mr-4">
              <Link href='#'>Políticas de Privacidade</Link>
            </li>
            <li className="inline-block text-xs text-gray-600 mr-4">
              <Link href='#'>Cookies</Link>
            </li>
            <li className="inline-block text-xs text-gray-600 mr-4">
              <Link href='#'>Sobre anúncios</Link>
            </li>
          </ul>
        </div>

        <div className={'md:col-span-2 mt-20'}>
          <p className='flex justify-end text-gray-500 text-xs'>&copy; 2021 Spotify AB</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer