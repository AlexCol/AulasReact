import React from 'react'

function MainRight() {
  const inputTailwindClass = `
    flex-1
    p-3
    rounded
    md:rounded-md
    border
    border-gray-400
    bg-gray-200
    md:bg-white
    text-sm
    md:text-base
    placeholder-gray-600
    md:placeholder-gray-500
  `;
  const inputUsernameTailwindClass = `
    ${inputTailwindClass}
    mb-2
    md:mb-3
  `;
  const inputPasswordTailwindClass = `
    ${inputTailwindClass}
    mb-3
  `;

  const buttonTailwindClass = `
    flex-1
    mb-3
    py-2
    px-3
    rounded-md
    bg-main-blue
    hover:bg-main-blue-hover
    font-semibold
    text-white
    text-xl
  `;

  return (
    <div className="md:w-396px md:place-self-end">
      <div className="p-4 md:border md:shadow-xl rounded-md bg-white">
        <form action="" className='flex flex-col'>
          <input type="text" placeholder='Email ou telefone' className={inputUsernameTailwindClass} />
          <input type="password" placeholder='Senha' className={inputPasswordTailwindClass} />
          <input type="submit" value='Entrar' className={buttonTailwindClass} />
        </form>
        <div className='flex flex-col divide-y divide-gray-400 text-center mt-2 md:mt-0'>
          <div className='pb-4 order-2 md:order-1'>
            <a href="" className='text-blue-600 hover:underline'>Esqueceu a senha?</a>
          </div>
          <div className='pb-6 pt-8 order-1 md:order-2'>
            <a href="" className='py-3 px-4 bg-main-green hover:bg-main-green-hover text-white text-md md:text-lg rounded md:rounded-md'>Criar nova conta</a>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default MainRight
