import React, { FC } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

interface TooltipComponentProps {
  text: string;
}

const TooltipComponent: FC<TooltipComponentProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-1">
      <p>{text}</p>
      <button>
        <AiFillQuestionCircle className="text-xs text-title absolute" />
      </button>
    </div>
  );
};

export default TooltipComponent;
