import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function carousel({ picture, picture2, picture3 }) {
  const images = [picture, picture2, picture3].filter(Boolean);

  if (!images.length) {
    return null;
  }


  return (
    <Carousel className="imgCls2 market-product-carousel" interval={4200} pause="hover" touch>
      {images.map((image, index) => (
        <Carousel.Item className="market-product-slide" key={`${image}-${index}`}>
          <img
            className="imgClsi2 market-product-image"
            src={image}
            alt={`Product view ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default carousel;
