import React from 'react';
import ProductCard from './ProductCard';
import type { MensKurta } from '@/customers/types/MensKurta';
type Props = {
  data:MensKurta[];
};
const Product:React.FC<Props> = ({data}) => {
  const items = data.map((item)=><ProductCard data={item} />);
  return (
      <div className='flex flex-wrap justify-center'>
        {items}
      </div>
  );
};

export default Product;