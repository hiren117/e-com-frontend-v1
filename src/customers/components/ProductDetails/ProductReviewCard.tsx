import { Avatar, Box, Rating } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
type Props = {

};
const ProductReviewCard:React.FC<Props> = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1} >
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}> R </Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2 '>
                    <div>
                        <p className='font-semibold text-lg'> Ram</p>
                        <p className='opacity-70'> June 1, 2001</p>
                    </div>

                </div>
                <Rating name="half-rating" value={4.5} readOnly precision={0.25} />
                <p> nice Product , this is so excciting </p>

            </Grid>
        </Grid>
    </div>
  );
};

export default ProductReviewCard;