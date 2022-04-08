import React, { useState, useEffect } from "react";
import "./style.css";
import {
  evermoreHeroImg,
  fearlessHeroImg,
  redHeroImg,
} from "../../assets/index";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";
const carouselImages = [evermoreHeroImg, fearlessHeroImg, redHeroImg];

const Header = () => {
  const navigate = useNavigate();
  const [carousalImgIdx, setCarousalImgIdx] = useState(0);

  const changeCarousalImg = () => {
    setCarousalImgIdx(
      (carousalImgIdx) => (carousalImgIdx + 1) % carouselImages.length
    );
    setTimeout(changeCarousalImg, 2000);
  };
  useEffect(() => {
    if (window.innerWidth < 600) changeCarousalImg();
    return () => {
      setCarousalImgIdx(0);
    };
  }, []);

  return (
    <header className="pos-rel">
      <div className="hero desktop-hero">
        <img src={fearlessHeroImg} alt="hero-img" className="responsive-img" />
        <img src={evermoreHeroImg} alt="hero-img" className="responsive-img" />
        <img src={redHeroImg} alt="hero-img" className="responsive-img" />
      </div>

      <div className="hero mobile-hero">
        <img
          src={carouselImages[carousalImgIdx]}
          alt="hero-img"
          className="responsive-img"
          id="slides"
        />
      </div>

      <div className="overlay pos-abs"></div>
      <div className="hero-heading-container">
        <h1 className="hero-heading">The Best Taylor&apos;s Merch Is Here</h1>
        <button
          className="btn btn-solid-primary mt-1"
          onClick={() => {
            navigate(routes.PRODUCTS_PAGE);
          }}
        >
          SHOP NOW
        </button>
      </div>
    </header>
  );
};

export { Header };
