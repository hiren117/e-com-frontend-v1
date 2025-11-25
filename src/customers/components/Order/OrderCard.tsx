
import Grid from '@mui/material/Grid';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
type Props = {

};
const OrderCard: React.FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/orders/1`)} className='p-3 border-gray-950 shadow-md hover:shadow-xl hover:shadow-gray-600 '>
            <Grid className='text-left' container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='text-left flex cursor-pointer'>
                        <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://placehold.co/600x400?text=Mens+Kurta+7" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''> product.title</p>
                            <p className='opacity-50 text-xs font-semibold'> Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'> color: Black</p>

                        </div>
                    </div>

                </Grid>
                <Grid item xs={2}>
                    <p> 12000</p>

                </Grid>
                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-1 text-sm' />
                                <span className='mt-10'>
                                    Delivered on 13th Feb 2025
                                </span>

                            </p>
                            <p className='text-xs'>
                                Your item has been delivered
                            </p>
                        </div>
                    }

                    {false && <p>
                        <span>
                            Expected Delivery on 15th Feb 2025
                        </span>
                    </p>
                    }
                </Grid>

            </Grid>
        </div>
    );
};

export default OrderCard;