import Image from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ButtonNavigation from "./ButtonPrev";

interface CarouselRankProps {
  tiers: any;
  setIdTier: (param: number) => void;
}

const CarouselRank: FC<CarouselRankProps> = ({ tiers, setIdTier }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="relative"
    >
      <ButtonNavigation type="next" />
      <ButtonNavigation type="prev" />
      {Object.values(tiers).map((item: any) => {
        return (
          <SwiperSlide key={item.id} className="relative w-40 aspect-square">
            <Image
              fill
              src={item.image}
              alt="shield"
              onClick={() => setIdTier(item.id)}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselRank;
