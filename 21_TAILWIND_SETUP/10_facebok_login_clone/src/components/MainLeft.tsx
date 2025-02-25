import React from 'react'

function MainLeft() {
  return (
    <div className="pt-10">
      <img
        src='imgs/logo_facebook.svg'
        alt='Facebook'
        className='w-30 mx-auto md:mx-0 md:w-290px md:-mb-4 md:-ml-8'
      />
      <p className='hidden md:flex text text-subtitle leading-8 w-500px pr-6'>
        O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
      </p>
    </div>
  )
}

export default MainLeft
