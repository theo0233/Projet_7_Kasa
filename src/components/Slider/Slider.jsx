import React from "react";
import { useState } from "react";
import RightVector from "../../assets/VectorRight.png";
import LeftVector from "../../assets/VectorLeft.png";

const PicturesSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyle = {
    height: "100%",
    position: "relative",
  };
  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex]})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const leftArrow = {
    position: "absolute",
    top: "40%",
    left: "30px",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1,
  };
  const rightArrow = {
    position: "absolute",
    top: "40%",
    right: "30px",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1,
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

  return (
    <div style={sliderStyle}>
      <div style={leftArrow} onClick={goPrevious}>
        <img src={LeftVector} alt="" />
      </div>
      <div style={rightArrow} onClick={goNext}>
        <img src={RightVector} alt="" />
      </div>
      <div style={slideStyle}></div>
      <span className="carrousel__legend">
        {currentIndex + 1}/{slides.length}
      </span>
    </div>
  );
};
export default PicturesSlider;
