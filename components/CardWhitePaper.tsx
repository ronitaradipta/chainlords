import React, { FC } from "react";

interface CardWhitePaperProps {
  isActive: boolean;
  number: string;
  desc: Array<string>;
}

const CardWhitePaper: FC<CardWhitePaperProps> = ({
  isActive,
  number,
  desc,
}) => {
  return (
    <div className="flex items-center gap-6">
      <div
        className={`${
          isActive
            ? "border border-light-blue bg-gradient-to-b from-[#183B5C] to-[#040C12] card-glow"
            : "bg-[#060C14]"
        } p-10 rounded-lg text-right w-full`}
      >
        <ul>
          {desc &&
            desc.map((item, idx) => {
              return (
                <li className="text-xs md:text-base" key={idx}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
      <h4
        className={`${
          isActive ? "text-stroke-blue" : "text-stroke-white"
        } md:text-5xl text-3xl font-bold`}
      >
        {number}
      </h4>
    </div>
  );
};

export default CardWhitePaper;
