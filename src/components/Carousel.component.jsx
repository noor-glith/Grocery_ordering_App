import React from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

export default function Carousel({ slides, current, setCurrent }) {
  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative overflow-hidden z-0">
     <div
  className="flex transition-transform ease-in-out duration-500 h-[500px]"
  style={{ transform: `translateX(-${current * 100}%)` }}
>

        {slides.map((s, index) => (
          <img
            src={s}
            alt={`Slide ${index}`}
            key={index}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}