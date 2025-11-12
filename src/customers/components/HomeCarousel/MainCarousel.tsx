import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import MainCarouselData from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
{/* const item1 = MainCarouselData.map((item) => (
    <img src={item.image} className="w-full h-64 object-cover" alt={item.alt} />
));*/}

const items = [
    <img src="https://placehold.co/600x400?text=Image+1" className="w-full h-64 object-cover" alt="1" />,
  <img src="https://placehold.co/600x400?text=Image+2" className="w-full h-64 object-cover" alt="2" />,
  <img src="https://placehold.co/600x400?text=Image+3" className="w-full h-64 object-cover" alt="3" />,
  <img src="https://placehold.co/600x400?text=Image+4" className="w-full h-64 object-cover" alt="4" />,
  <img src="https://placehold.co/600x400?text=Image+5" className="w-full h-64 object-cover" alt="5" />,

];

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        controlsStrategy="alternate"
        autoPlayInterval={2000}
    />
);

export default MainCarousel;