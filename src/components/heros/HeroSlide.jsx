import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PrimaryBtn from "../buttons/PrimaryBtn";

const herosPromise = fetch('/heros.json').then(res => res.json())

const HeroSlide = () => {
    const heros = use(herosPromise)
  return (
    <div className="">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className=""
        modules={[Pagination, EffectCoverflow]}
      >
        {heros.map(hero => { 
            const {id, name, imageUrl} = hero
          return (
            <SwiperSlide
              key={id}
              className="max-w-1/2 md:max-w-1/4 mx-auto flex items-center justify-center mb-10"
            >
              <div className="w-full h-80 md:h-110 card card-side flex flex-col bg-black/40 shadow-sm">
                <figure className="w-full rounded-b-none md:rounded-b-md rounded-tr-md md:rounded-tr-none">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full object-cover"
                  />
                </figure>
                <div className="flex flex-col items-center justify-center gap-3 md:gap-5 p-3 md:p-7">
                  <h2 className="card-title text-lg md:text-2xl">
                    {name}
                  </h2>
                    <PrimaryBtn to={'/'} value={"Consult"} />
                </div>
              </div>
            </SwiperSlide>
          ); 
        })} 
      </Swiper>

      <style>{`
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

export default HeroSlide;
