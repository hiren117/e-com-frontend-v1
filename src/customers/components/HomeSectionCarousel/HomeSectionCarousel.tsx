import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import type { MensKurta } from '@/customers/types/MensKurta';

type Props = {
    data: MensKurta[]; // 👈 receive product array as a prop
    sectionName: string;
};

const HomeSectionCarousel: React.FC<Props> = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<AliceCarousel | null>(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slideNext = () =>
    carouselRef.current?.slideNext();

  const slidePrev = () =>
    carouselRef.current?.slidePrev();

  const syncActiveIndex = (e: any) => {
    setActiveIndex(e.item);
  };

  const items = data.map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-900 py-5 text-left">
        {sectionName}
      </h2>

      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            className="z-50"
            sx={{ position: "absolute", top: "8rem", left: "0rem" }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}

        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "rotate(180deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}
      </div>
    </div>
  );
};
export default HomeSectionCarousel;