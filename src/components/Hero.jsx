import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
    <div className='max-h[500px] relative'>
    <div className='absolute w-full h-full text-gray-200 max-h[500px] bg-black/40 flex flex-col justify-center'>
    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Teslim <span className='text-orange-500'>Edilmiş</span></h1>
    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'> <span className='text-orange-500'>En iyi</span> Yiyecekler</h1>
    </div>
    <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
    </div>
    </div>
  )
}

export default Hero