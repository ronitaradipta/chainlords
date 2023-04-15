import React, { FC } from "react";
import { investors } from "@/constant/dataHome";
import Image from "next/image";

interface PartnerComponentProps {
  headTextStyle: string;
  subHeadTextStyle: string;
}

const PartnerComponent: FC<PartnerComponentProps> = ({
  headTextStyle,
  subHeadTextStyle,
}) => {
  return (
    <section id="partners" className="md:p-36 px-5 text-center">
      <h2 className={headTextStyle}>MEET</h2>
      <p className={subHeadTextStyle}>INVESTORS & PARTNERSHIPS</p>
      <div className="grid grid-cols-4 gap-4 align-middle justify-items-center mt-20">
        {investors.map((item) => {
          return (
            <div key={item}>
              <Image src={item} alt="logo" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerComponent;
