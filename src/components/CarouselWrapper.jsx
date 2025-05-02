import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.component';

function CourselWrapper() {
  const slides = [
    {
      url: 'https://d91ztyz4qy326.cloudfront.net/storeking/25/conversions/slider_one-cover.png',
    },
    {
      url: 'https://d91ztyz4qy326.cloudfront.net/storeking/27/conversions/slider_three-cover.png',
    },
    {
      url: 'https://d91ztyz4qy326.cloudfront.net/storeking/26/conversions/slider_two-cover.png',
    },
  ];

  const [current, setCurrent] = useState(0);
  const slideUrls = slides.map((slide) => slide.url);

  // Auto-slide change every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1));
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array, so it runs once on mount

  return (
    <div className="w-[90%] h-[500px] m-auto pt-11 rounded-2xl overflow-hidden relative">
      <Carousel slides={slideUrls} current={current} setCurrent={setCurrent} />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
  {slides.map((_, index) => (
    <div
      key={index}
      onClick={() => setCurrent(index)}
      className={`cursor-pointer h-2 rounded-2xl transition-all duration-300
        ${index === current 
          ? 'bg-green-500 w-6 opacity-100' 
          : 'bg-green-500 w-4 opacity-50'}`}
    />
  ))}
</div>



    </div>
  );
}

export default CourselWrapper;
