import Image from "next/image";
import React from "react";
import { useSwiper } from "swiper/react";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className="absolute top-20 right-0 z-10"
      onClick={() => swiper.slideNext()}
    >
      <Image width={50} height={50} src="/rank/rightArrow.png" alt="next" />
    </button>
  );
};

export default SlideNextButton;
