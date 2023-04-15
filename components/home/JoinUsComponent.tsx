import Image from "next/image";
import React, { FC } from "react";
import {
  BsDiscord,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import MainButton from "../MainButton";

interface JoinUsComponentProps {
  headTextStyle: string;
  subHeadTextStyle: string;
}

const JoinUsComponent: FC<JoinUsComponentProps> = ({
  headTextStyle,
  subHeadTextStyle,
}) => {
  const socialStyles =
    "text-3xl hover:text-blue hover:-translate-y-3 duration-300";
  return (
    <section id="join-us" className="p-36 text-center relative min-h-screen">
      <Image
        src="/space-bg-join-us.jpg"
        alt="bg space"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className={headTextStyle}>JOIN US</h2>
        <p className={`${subHeadTextStyle} mb-12`}>COME TO OUR GUILD</p>
        <MainButton text="JOIN US" link="https://discord.gg/QHHDpVfvvw" />
        <div className="flex mt-10 items-center gap-6">
          <a href="https://twitter.com/chainlordsguild">
            <BsTwitter className={socialStyles} />
          </a>
          <a href="https://www.youtube.com/channel/UC6U9mtYbNsrzO3CEDthl9cw?sub_confirmation=1">
            <BsYoutube className={socialStyles} />
          </a>
          <a href="https://www.instagram.com/chainlords/">
            <BsInstagram className={socialStyles} />
          </a>
          <a href="https://discord.com/invite/QHHDpVfvvw">
            <BsDiscord className={socialStyles} />
          </a>
          <a href="https://t.me/chainlords">
            <BsTelegram className={socialStyles} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUsComponent;
