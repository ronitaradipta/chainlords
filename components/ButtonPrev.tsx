import Image from "next/image";
import React, { FC } from "react";
import { useSwiper } from "swiper/react";

interface ButtonNavigationProps {
  type: string;
}

const ButtonNavigation: FC<ButtonNavigationProps> = ({ type }) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${
        type === "next" ? "right-0" : "left-0"
      } absolute top-20 z-10`}
      onClick={() =>
        type === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      <Image
        width={50}
        height={50}
        src={type === "next" ? "/rank/rightArrow.png" : "/rank/leftArrow.png"}
        alt="next"
      />
    </button>
  );
};

export default ButtonNavigation;
