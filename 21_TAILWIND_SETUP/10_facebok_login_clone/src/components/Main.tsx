import React from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
  return (
    <main>
      <div className='md:bg-main-gray md:pt-30 md:pb-40'>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
          <MainLeft />
          <MainRight />
        </div>
      </div>
    </main>
  )
}

export default Main
