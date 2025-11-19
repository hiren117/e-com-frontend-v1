import React from 'react';
import './ProductCard.css';
import type { MensKurta } from '@/customers/types/MensKurta';
type Props = {
  data: MensKurta;
};
const ProductCard:React.FC<Props> = ({data}) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer" >
      <div className='h-[20rem] '>
        <img className='h-full w-full' src={data.imageUrl} alt="" />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{data.brand}</p>
          <p>{data.title} </p>
        </div>
        <div className='font-semibold flex items-center-safe space-x-2'>
          <p className=''>{data.discountedPrice}</p>
          <p className='line-through opacity-50'>{data.price}</p>
          <p className='text-green-600  '> {data.discount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;