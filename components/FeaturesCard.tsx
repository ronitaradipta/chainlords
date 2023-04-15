import Image from "next/image";
import React, { FC } from "react";

interface FeaturesCardProps {
  src: string;
  title: string;
  description: string;
}

const FeaturesCard: FC<FeaturesCardProps> = ({ src, title, description }) => {
  return (
    <div className="md:w-[340px] md:h-[430px] w-full h-[200px] relative mx-auto cursor-pointer group">
      <Image fill={true} src={src} alt="features" />
      <div className="absolute h-full w-full group-hover:backdrop-opacity-10 group-hover:bg-black/40 duration-500"></div>
      <div className="absolute md:bottom-20 bottom-8 left-5 md:group-hover:-translate-y-24 duration-500 ">
        <h3 className="md:text-2xl font-medium text-shadow text-start md:mb-6">
          {title}
        </h3>
        <p className="text-left hidden opacity-0 group-hover:opacity-100 duration-1000 group-hover:block md:pr-5 text-xs md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
