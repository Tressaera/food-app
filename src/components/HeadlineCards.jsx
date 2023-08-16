import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    {/* Başlık */}
    <div className='rounded-xl relative'>
          {/* Kaplama */}
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Müthiş patates ve Burger</p>
    <p className='p-2'>12'ye kadar</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 font-bold hover:scale-90'>Şimdi sipariş ver</button>
    </div> 
    <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"></img>
    </div>
      {/* Başlık */}
      <div className='rounded-xl relative'>
          {/* Kaplama */}
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Leziz Burrito</p>
    <p className='p-2'>14'e kadar</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 font-bold hover:scale-90'>Şimdi sipariş ver</button>
    </div> 
    <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"></img>
    </div>
      {/* Başlık */}
      <div className='rounded-xl relative'>
          {/* Kaplama */}
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Sebzeli Sandviç</p>
    <p className='p-2'>18'e kadar</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 font-bold hover:scale-90'>Şimdi sipariş ver</button>
    </div> 
    <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"></img>
    </div>
    </div>
   
  )
}

export default HeadlineCards