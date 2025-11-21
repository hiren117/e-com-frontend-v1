import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
type Props = {

};
const CartCard: React.FC<Props> = () => {
    return (
        <div className='text-left p-5 shadow-lg border-gray-500 rounded-md' >
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                    <img className='w-full h-full object-cover object-top' src="https://m.media-amazon.com/images/I/71g2ednj0JL._UL1500_.jpg" alt="" />

                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'> Product Title</p>
                    <p className='opacity-70'> Product.size, product.color </p>
                    <p className='opacity-70 mt-2'>Seller: Seller.name</p>

                    <div className='flex space-x-5 items-center text-gray-900 mt-6'>
                        <p className="font-semibold">discountedPrice</p>
                        <p className=" line-through opacity-50">price</p>
                        <p className=" text-green-600 font-semibold ">discount</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>
                    <IconButton >
                        <RemoveCircleOutline />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>7</span>
                    <IconButton sx={{color:"#9155fd"}}>
                        <AddCircleOutline />
                    </IconButton>
                    

                </div>
                <div>
                    <Button sx={{color:"#9155fd"}}>Remove</Button>
                </div>

            </div>

        </div>
    );
};

export default CartCard;