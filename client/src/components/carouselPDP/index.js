import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./styleCar.css"

function carousel({ picture, picture2, picture3 }) {


  return (
    <Carousel className="imgCls2">
      <Carousel.Item className="imgCls2">
        <img
          className="imgClsi2"
          src={picture}
          alt="First slide"
        />
      </Carousel.Item >
      <Carousel.Item className="imgCls2">
        <img
          className="imgClsi2"
          src={picture2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="imgCls2">
        <img
          className="imgClsi2"
          src={picture3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
