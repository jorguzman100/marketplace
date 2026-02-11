import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";


function carousel() {
  return (
    <Carousel className="minCar">
      <Carousel.Item className="minCar">
        <img
          className="d-block w-100"
          src="https://themarket.s3.us-east-2.amazonaws.com/Banners/banner1.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="minCar">
        <img
          className="d-block w-100"
          src="https://themarket.s3.us-east-2.amazonaws.com/Banners/banner2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="minCar">
        <img
          className="d-block w-100"
          src="https://themarket.s3.us-east-2.amazonaws.com/Banners/banner3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
