import React from 'react';
import './ProductCard.css';
type Props = {

};
const ProductCard:React.FC<Props> = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer" >
      <div className='h-[20rem] '>
        <img className='h-full w-full' src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg"
          alt="" />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>Atomic Habits</p>
          <p>Title</p>
        </div>
        <div className='font-semibold flex items-center space-x-2'>
          <p className=''>$10.00</p>
          <p className='line-through opacity-50'>$100.0</p>
          <p className='text-green-600  '>90% off</p>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;