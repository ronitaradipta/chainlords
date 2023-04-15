import React, { FC } from "react";

interface ProgressBarProps {
  bgcolor: string;
  completed?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "rgba(139, 67, 74, 0.28)",
    borderRadius: 50,
    padding: "5px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    boxShadow: "0px 0px 10px #BD2735",
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
