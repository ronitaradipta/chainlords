import React, { FC } from "react";

interface MainButtonProps {
  text: string;
  link?: string;
}

const MainButton: FC<MainButtonProps> = ({ text, link }) => {
  return (
    <div className="border border-blue  w-[180px] h-[72px] group flex justify-center items-center">
      <a href={link}>
        <button className="py-2 px-10 group-hover:py-3 group-hover:px-11 bg-blue text-base group-hover:text-lg transition-all ease-in-out">
          {text}
        </button>
      </a>
    </div>
  );
};

export default MainButton;
