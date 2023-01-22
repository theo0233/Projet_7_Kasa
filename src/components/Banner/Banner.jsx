import React from "react";
import "./Banner.css";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt="Bannière" />
      <span className="banner-text">{text}</span>
    </div>
  );
}

export default Banner;
