import React, {useState} from 'react'
import { data } from '../data/data.js';

const Food = () => {
    // console.log(data);
    const [foods, setFoods] = useState(data);

     //   kategori filtresi
  const filterType = (kategori) => {
    setFoods(
      data.filter((item) => {
        return item.kategori === kategori;
      })
    );
  };

  //   Fiyat filtresi
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.fiyat === price;
      })
    );
  };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
      En Çok Oy Alan Menü Öğeleri
      </h1>

      {/* Filtreler */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filtre Tipi */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Hepsi
            </button>
            <button
              onClick={() => filterType('Burger')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burger
            </button>
            <button
              onClick={() => filterType('Pizza')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('Salata')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salatalar
            </button>
            <button
              onClick={() => filterType('Tavuk')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Tavuk
            </button>
          </div>
        </div>

        {/* Fiyat Tipleri */}
        <div>
          <p className='font-bold text-gray-700'>Fiyat Tipleri</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('80')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              80
            </button>
            <button
              onClick={() => filterPrice('250')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              250
            </button>

            <button
              onClick={() => filterPrice('1000')}
              className='m-1 px-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              1000
            </button>
          </div>
        </div>
      </div>

      {/* Yemekleri Görüntüle */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.resim}
              alt={item.ad}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.ad}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.fiyat}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;