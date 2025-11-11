import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import PrimaryBtn from "../buttons/PrimaryBtn";

const heroSlides = [
  {
    id: 1,
    heading: "Purify Your Air Naturally",
    slogan:
      "Transform your home into a fresh, toxin-free sanctuary with living plants",
    imgUrl: "https://i.ibb.co.com/XxBmVLzS/banner-second.jpg",
  },{
    id: 2,
    heading: "Find Peace in Plant Care",
    slogan:
      "Discover mindfulness and reduce stress through nurturing green companions",
    imgUrl: "https://i.ibb.co.com/9mYdY00f/banner-main.png",
  },
  {
    id: 3,
    heading: "Boost Mood with Greenery",
    slogan: "Enhance productivity and happiness by bringing nature indoors",
    imgUrl: "https://i.ibb.co.com/4RCSgXFv/toy-benner.png",
  },
  {
    id: 4,
    heading: "Boost Mood with Greenery",
    slogan: "Enhance productivity and happiness by bringing nature indoors",
    imgUrl: "https://i.ibb.co.com/0pTGN8fR/accessories-banner.png",
  },
  {
    id: 5,
    heading: "Boost Mood with Greenery",
    slogan: "Enhance productivity and happiness by bringing nature indoors",
    imgUrl: "https://i.ibb.co.com/LdmB1WZN/food-banner.png",
  }
];

const HeroSwiper = () => {
  return (
    <div className="w-full mx-auto bg-base-200">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        speed={'1500'}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
        className="max-w-[1440px] mx-auto h-60 md:h-130" 
        modules={[Navigation, Pagination, Autoplay]}
      >
        {heroSlides.map(slide => {
          return (
            <SwiperSlide key={slide.id} className="max-w-full h-full relative">
              <div className="absolute inset-0 max-w-full h-full">
                <img
                  src={slide.imgUrl}
                  alt={slide.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative w-11/12 mx-auto h-full flex items-center">
                <div className={`w-[90%] mx-auto md:mx-0 md:w-1/2 bg-black/40 ${slide.id === 4? 'md:bg-black/40':'md:bg-black/0'} bg-opacity-90 p-6 rounded-lg flex flex-col items-center md:items-start gap-2 md:gap-4`}>
                  <h1 className="text-xl md:text-6xl font-bold text-primary">
                    {slide.heading}
                  </h1>
                  <p className="text-sm md:text-xl font-bold text-primary text-center md:text-left">
                    {slide.slogan}
                  </p>
                  <div>
                    <PrimaryBtn to={'/#'} value={'Learn more..'} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--color-primary) !important;
          padding: 10px;
        }
        .swiper-pagination-bullet {
          background: var(--color-base-content) !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-secondary) !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSwiper;
