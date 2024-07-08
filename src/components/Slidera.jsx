import React, { useState } from 'react';

const Slidera = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider top-0">
      <button onClick={prevSlide}>Previous</button>
      <img className="mt-0 h-[729px]"src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slidera;
