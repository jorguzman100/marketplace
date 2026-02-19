import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const slides = [
  {
    src: "https://themarket.s3.us-east-2.amazonaws.com/Banners/banner1.png",
    title: "Tech Picks With Fast Delivery",
    subtitle: "Fresh gadgets, better prices and trusted sellers.",
    kicker: "Trending now",
    ctaLabel: "Shop Technology",
    ctaTo: "/home/productlist/Technology",
  },
  {
    src: "https://themarket.s3.us-east-2.amazonaws.com/Banners/banner2.png",
    title: "Sport Essentials For Every Day",
    subtitle: "Train, recover and upgrade your gear in one place.",
    kicker: "Top deals",
    ctaLabel: "Shop Sports",
    ctaTo: "/home/productlist/Sports",
  },
  {
    src: "https://themarket.s3.us-east-2.amazonaws.com/Banners/banner3.png",
    title: "Pet Favorites You Will Love",
    subtitle: "Comfort, care and fun for every furry friend.",
    kicker: "Most loved",
    ctaLabel: "Shop Pets",
    ctaTo: "/home/productlist/Pets",
  },
];

function carousel() {
  return (
    <Carousel className="market-hero-carousel" fade interval={5000} pause="hover" touch>
      {slides.map((slide) => (
        <Carousel.Item className="market-hero-slide" key={slide.src}>
          <img
            className="d-block w-100 market-hero-image"
            src={slide.src}
            alt={slide.title}
          />
          <div className="market-hero-shade"></div>
          <Carousel.Caption className="market-hero-caption">
            <span className="market-hero-kicker">{slide.kicker}</span>
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <Link to={process.env.PUBLIC_URL + slide.ctaTo} className="market-hero-cta">
              {slide.ctaLabel}
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default carousel;
