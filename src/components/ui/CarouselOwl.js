import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Slider from "../../assets/images/slider/slide-1.png";
import Slider2 from "../../assets/images/slider/slide-2.png";

export const CarouselOwl = () => {
  return (
    <div className="banner">
      <OwlCarousel
        className="owl-theme"
        loop
        items="1"
        margin={10}
        nav
        dots={true}
        autoplay
        autoplayTimeout={"4500"}
        responsive={{
          200: { items: 1 },
          600: { items: 1 },
          920: { items: 1 },
        }}
      >
        <div class="item">
          <img src={Slider} className="img-slider" alt={Slider} />
        </div>
        <div class="item">
          <img src={Slider2} className="img-slider" alt={Slider2} />
        </div>
      </OwlCarousel>
    </div>
  );
};
