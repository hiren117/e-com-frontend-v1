import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import Cart from '../Cart/Cart';
import { Button } from '@mui/material';
import CartCard from '../Cart/CartCard';
type Props = {

};
const OrderSummary:React.FC<Props> = () => {
  return (
    <div>
        <div className=''>
            <AddressCard />
            
             
        </div>
        <div>
            <div className='lg:grid lg:grid-cols-3 relative space-x-1 mt-10 lg:space-x-10 '>
                <div className='col-span-2 space-y-3'>
                    {[1,1,1,1].map((item) => (<CartCard />))}
                </div>
                <div className='px-0 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border-gray-500 p-5 shadow-lg rounded-md'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details </p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>$12</span>

                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600'>12%</span>

                            </div><div className='flex justify-between pt-3 '>
                                <span>Delivary Charge</span>
                                <span className='text-green-600'>Free</span>

                            </div><div className='flex justify-between pt-3 '>
                                <span>Total Amount</span>
                                <span className='text-green-600'>$19.2</span>

                            </div>

                        </div>
                        <div className='text-left py-1'>
                            <Button className='w-full' variant='contained' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
                            >
                                Place Order
                            </Button>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    </div>
  );
};

export default OrderSummary;