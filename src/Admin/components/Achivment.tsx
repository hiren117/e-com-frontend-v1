import { Button, Card, CardContent, styled, Typography } from '@mui/material';
import React from 'react';
type Props = {

};

const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',
  });

const TrophyImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',
  });

const Achivment:React.FC<Props> = () => {
  return (
    <Card className='flex' sx = {{ position: 'relative', bgcolor: '#242B2E', color: 'white' }}>
        <CardContent>
            <div className='text-left'>
            <Typography variant='h6'>Shop with Kashi </Typography>
            <Typography variant='body2'>Congratulations    </Typography>
            <Typography className='py-6' variant = 'h5'>117k+   </Typography>
            <Button  variant='contained'> 
                view sales
            </Button>
            </div>

            {/* <TriangleImg src='' alt='Triangle' /> */}
            <TrophyImg src='https://static.vecteezy.com/system/resources/previews/059/556/331/non_2x/winning-gold-trophy-in-hand-achievement-success-victory-award-image-free-png.png' alt='Trophy' />
        </CardContent>

    </Card>
  );
};

export default Achivment;