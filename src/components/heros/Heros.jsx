import React from "react";
import HeroSlide from "./HeroSlide";

const Heros = () => {
  return (
    <div
  className={`max-w-[1440px] mx-auto
    bg-cover bg-[url(https://i.ibb.co.com/7xkTF24d/down-banner.png)]
    `}
>
  <div className="w-full bg-black/30 mx-auto flex flex-col items-center gap-5 md:gap-10 justify-center px-2 md:px-5 py-10 md:py-10">
    <h1 className="text-2xl md:text-4xl font-semibold text-center rounded-md p-5">
      Meet Our Heros
    </h1>

    {/* Make sure Swiper has enough height */}
    <div className="w-full ">
      <HeroSlide />
    </div>
  </div>
</div>

  );
};

export default Heros;
