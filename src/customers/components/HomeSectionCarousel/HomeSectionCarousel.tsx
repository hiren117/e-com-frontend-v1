import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard />)
    return (
        <div className=' border border-black '>
            <div className='relative p-5'>
                <AliceCarousel
                    disableButtonsControls
                    items={items}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
                <Button className='z-50' sx={{ position: 'absolute', top: '8rem', left: '0rem' }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon />
                </Button>
                <Button className='z-50' sx={{
                    position: 'absolute', top: '8rem', right: '0rem',
                    transform: 'rotate(180deg)'
                }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;