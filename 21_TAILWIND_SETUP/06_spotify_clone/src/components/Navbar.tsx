import Link from 'next/link'
import React from 'react'

function Navbar() {
  const liTailwindClass = 'px-4';
  const linkTailwindClass = 'hover:text-hoverspt text-sm transition duration-300';

  return (
    <header>
      <div className='flex fixed bg-black w-full px-3 md:px-20 py-4'>
        <div className='container mx-auto flex items-center'>
          <div>
            <Link href="/">
              <img src="imgs/spotify-logo.png" alt="Spotify" className='w-20 md:w-125px' />
            </Link>
          </div>

          <div className='flex justify-end flex-1 md:hidden text-white text-3xl'>
            <i className='fas fa-bars'></i>
          </div>

          <div className='items-end flex-1 text-white font-bold hidden md:flex'>
            <nav className='flex-1'>
              <ul className='flex justify-end flex-1'>
                <li className={liTailwindClass}>
                  <Link href="#" className={linkTailwindClass}>Premium</Link>
                </li>
                <li className={liTailwindClass}>
                  <Link href="#" className={linkTailwindClass}>Ajuda</Link>
                </li>
                <li className={liTailwindClass}>
                  <Link href="#" className={linkTailwindClass}>Baixar</Link>
                </li>
                <li className={liTailwindClass}>
                  <span className='border-r border-white'></span>
                </li>
                <li className={liTailwindClass}>
                  <Link href="#" className={linkTailwindClass}>Inscrever-se</Link>
                </li>
                <li className={liTailwindClass}>
                  <Link href="#" className={linkTailwindClass}>Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar