import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTraker from './OrderTraker';
import Grid from '@mui/material/Grid';
import StarBorderIcon from '@mui/icons-material/StarBorder';
type Props = {

};
const OrderDetails:React.FC<Props> = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div className='text-left'>
            <h1 className='font-semibold text-xl py-10'>Delivary Address</h1>
            <AddressCard/>
        </div>
        <div className='py-10'>
            <OrderTraker activeStep={3}/>
        </div>
        {[1,1,1,1,1].map((item)=>
        <div className='p-3 border-gray-950 shadow-md hover:shadow-xl hover:shadow-gray-600 mb-5'>         
            <Grid className='text-left' container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='text-left items-center flex cursor-pointer space-x-2'>
                        <img className='h-[5rem] w-[5rem] ' src="https://placehold.co/600x400?text=Mens+Kurta+7" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className='font-semibold'> product.title</p>
                            <p className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>Size: M</span><span>color: Black</span>  
                            </p>
                            <p>Seller : name </p>
                            <p>12000</p>

                        </div>
                    </div>

                </Grid>
                <Grid item xs={4}>
                        <div className='text-purple-600 items-center'>
                            <p>
                                <StarBorderIcon className='mr-1' sx={{ width: "25px", height: "25px" }} />
                                <span className='mt-10'>
                                    Rate & Review Product
                                </span>

                            </p>
                        </div>
                </Grid>

            </Grid>
        </div>)}
        
        

    </div>
  );
};

export default OrderDetails;