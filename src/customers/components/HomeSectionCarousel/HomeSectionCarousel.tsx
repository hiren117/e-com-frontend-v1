import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import type { MensKurta } from '@/customers/types/MensKurta';

type Props = {
    data: MensKurta[]; // 👈 receive product array as a prop
    sectionName: string;
};

const HomeSectionCarousel: React.FC<Props> = ({ data,sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const syncActiveIndex = ({ item }: { item: number }) => setActiveIndex(item);  // -------------------->> error
    const items = data.map((item) => <HomeSectionCard product={item} />)

    // const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard {...item} />)

    return (
        <div className=''>
            <h2 className='text-2xl font-extrabold text-gray-900 py-5 text-left'>{sectionName} </h2>
            <div className='relative p-5'>
                <AliceCarousel
                    disableButtonsControls
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== 0 && <Button onClick={slidePrev} className='z-50'
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem'
                    }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon />
                </Button>}

                {activeIndex !== items.length - 5 && <Button onClick={slideNext} className='z-50'
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'rotate(180deg)'
                    }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon />
                </Button>}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;