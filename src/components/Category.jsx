import React from 'react';
import { kategoriler } from '../data/data.js';

const Category = () => {
  console.log(kategoriler);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
      En Çok Oy Alan Menü Öğeleri
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {kategoriler.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:bg-orange-600 hover:duration-200 hover:text-white hover:scale-90 cursor-pointer'
          >
            <h2 className='font-bold sm:text-xl'>{item.ad}</h2>
            <img src={item.resim} alt={item.ad} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;