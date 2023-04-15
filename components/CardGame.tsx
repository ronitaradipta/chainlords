import Image from "next/image";
import React, { FC } from "react";

interface CardGameProps {
  src: string;
}

const CardGame: FC<CardGameProps> = ({ src }) => {
  return (
    <div className="md:w-[273px] md:h-[326px] w-full h-[200px] relative mx-auto cursor-pointer hover:-translate-y-4 transition-all duration-500">
      <Image fill={true} src={src} alt="game" />
    </div>
  );
};

export default CardGame;
