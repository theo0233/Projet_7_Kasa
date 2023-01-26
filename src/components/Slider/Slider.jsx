import React from "react";
import { useState } from "react";
import RightVector from "../../assets/VectorRight.png";
import LeftVector from "../../assets/VectorLeft.png";
import "../Slider/Slider.css";

const PicturesSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideImg = {
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const goPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  if (slides.length === 1) {
    return <div style={slideImg} className="slideStyle"></div>;
  }
  return (
    <div className="sliderStyle">
      <div className="leftArrow" onClick={goPrevious}>
        <img src={LeftVector} alt="" />
      </div>
      <div className="rightArrow" onClick={goNext}>
        <img src={RightVector} alt="" />
      </div>
      <div style={slideImg} className="slideStyle"></div>
      <span className="carrousel-legend">
        {currentIndex + 1}/{slides.length}
      </span>
    </div>
  );
};
export default PicturesSlider;
