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
    heading: "Unlock Happiness with a Furry Companion",
    slogan: "Experience joy, reduce stress, and enrich your life by adopting a loving pet today.",
    button: "Adopt now",
    imgUrl: "https://i.ibb.co.com/bj7Hgq9s/Screenshot-2025-11-16-042724hgc.png",
    link: "/pets&supplies/?category=Pets",
  },
  {
    id: 2,
    heading: "Indoor Pets, Infinite Joy",
    slogan: "Turn your home into a lively sanctuary filled with the love of indoor pets.",
    button: "Adopt now",
    imgUrl: "https://i.ibb.co.com/mKXJjYN/Screenshot-2025-11-16-0445331.png",
    link: "/pets&supplies/?category=Pets",
  },
  {
    id: 3,
    heading: "Stylish Gear for Your Pet",
    slogan: "Upgrade your pet’s life with accessories designed for comfort, fun, and style.",
    button: "Buy Accessories",
    imgUrl: "https://i.ibb.co.com/KxRp19vb/Chat-GPT-Image-Nov-16-2025-05-39-26-AM.png",
    link: "/pets&supplies/?category=Accessories",
  },
  {
    id: 4,
    heading: "Playtime Just Got Better",
    slogan: "Keep your pet active, happy, and entertained with our playful collection.",
    button: "Buy Toys",
    imgUrl: "https://i.ibb.co.com/N60tTr85/Screenshot-2025-11-09-183242.png",
    link: "/pets&supplies/?category=Care Products",
  },
  {
    id: 5,
    heading: "Feed Their Happiness",
    slogan: "Nourish your pet with wholesome, tasty meals they’ll love every day.",
    button: "Buy Foods",
    imgUrl: "https://i.ibb.co.com/1txrrCx7/About-Us-Header-image.png",
    link: "/pets&supplies/?category=Food",
  },
  {
    id: 6,
    heading: "Comfort Zones for Your Pets",
    slogan: "Create the perfect retreat for your pets with our stylish houses and furniture.",
    button: "Buy Furniture",
    imgUrl: "https://i.ibb.co.com/WW82D6c9/Screenshot-2025-11-16-053133.png",
    link: "/pets&supplies/?category=Accessories",
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
                <div className={`w-[90%] mx-auto md:mx-0 md:w-1/2 bg-black/40 bg-opacity-90 p-6 rounded-lg flex flex-col items-center md:items-start gap-2 md:gap-4`}>
                  <h1 className="text-xl md:text-6xl font-bold text-primary">
                    {slide.heading}
                  </h1>
                  <p className="text-sm md:text-xl font-bold text-primary text-center md:text-left">
                    {slide.slogan}
                  </p>
                  <div>
                    <PrimaryBtn to={slide.link} value={slide.button} />
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
          background: var(--color-primary) !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-secondary) !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSwiper;
