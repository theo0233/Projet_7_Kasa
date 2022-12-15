import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
  const whichPosition = {
    position: "absolute",
    color: "#fff",
    fontSize: "30px",
  };

  const goPrevious = () => {
    const isFirstSlide = currentIndex === 1;
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
    </div>
  );
};
export default PicturesSlider;

/* Carousel with library
function Slider({ slides }) { 
  console.log(slides);
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <img src={slide} key={index} alt="" />
      ))}
    </Carousel>
  );
}
export default Slider; */
