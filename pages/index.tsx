import Image from "next/image";

import chainlords from "../assets/chainlords-logo.svg";
import VideoComponent from "../components/VideoComponent";
import { feature, sponsor, whitePaper } from "../constant/dataHome";

import { useState } from "react";

import { BsFillPlayBtnFill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import CardGame from "@/components/CardGame";
import Clipboard from "react-clipboard.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeaturesCard from "@/components/FeaturesCard";
import CardWhitePaper from "@/components/CardWhitePaper";
import PartnerComponent from "@/components/home/PartnerComponent";
import MainButton from "@/components/MainButton";
import JoinUsComponent from "@/components/home/JoinUsComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function Home() {
  const [showOverlayVideo, setShowOverlayVideo] = useState(true);

  const textToCopy = "0xe5894032cd37fc64bad4656314bf74e66775e17e";

  const headTextStyle = "md:text-6xl text-4xl font-bold text-stroke text-white";
  const subHeadTextStyle = "md:text-4xl text-2xl font-bold -mt-6 mb-4";

  const handleCopy = () => {
    toast("Text Copied!");
  };

  return (
    <>
      <NavbarComponent />
      <main>
        <section className="md:min-h-screen min-h-[360px] relative">
          <VideoComponent source="/hero-video.mp4" />
          <div className="backdrop-opacity-40 bg-black/30 md:hidden w-full h-full absolute"></div>
          <div className="absolute h-full w-full flex items-center justify-end text-center z-10 ">
            <div className="w-full md:w-8/12 flex flex-col justify-center items-center">
              <div className="md:w-[360px] w-48 h-12 relative">
                <Image
                  fill
                  src={chainlords}
                  alt="logo"
                  className="drop-shadow-[1px_1px_12px_#3EA2FD]"
                />
              </div>
              <p className="mt-4 mb-6 text-gray-300">Lords of The Metaverse</p>
              <MainButton text="JOIN US" link="#join-us" />
            </div>
          </div>
        </section>
        <section className="py-6 overflow-hidden">
          <div className="flex gap-6 items-center animate-marquee">
            {sponsor.map((item, idx) => {
              return (
                <div className="flex-shrink-0" key={idx}>
                  <Image src={item} alt="sponsor" />
                </div>
              );
            })}
          </div>
        </section>
        <section
          id="about"
          className="bg-[url('/space-background.jpg')] md:min-h-screen bg-cover bg-center flex flex-col-reverse md:flex-row items-center md:p-section p-mobile gap-6"
        >
          <div className="md:w-6/12 w-full">
            <div className="relative md:w-[560px] md:h-[315px] aspect-video">
              {showOverlayVideo && (
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[url('/chainlords-hero.jpg')] bg-cover bg-center border border-light-blue rounded-lg flex justify-center items-center card-glow group transition-all duration-500"
                  onClick={() => setShowOverlayVideo(false)}
                >
                  <BsFillPlayBtnFill className="md:text-7xl text-5xl group-hover:text-blue" />
                </div>
              )}
              <iframe
                className="md:w-[560px] md:h-[315px] aspect-video w-full"
                src="https://www.youtube.com/embed/xvLoSkVoC9c"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <h2 className={headTextStyle}>ABOUT</h2>
            <p className={subHeadTextStyle}>THE GUILD</p>
            <p className="text-gray-300 text-xs md:text-base">
              Chain Lords are a gaming guild and DAO that focuses on
              play-to-earn blockchain based games and metaverse land conquests.
              As a guild we help people play, earn and explore the metaverse
              through games. Where we all mutually benefit together from our
              play and experiences.
            </p>
          </div>
        </section>
        <section className="md:min-h-screen min-h-[560px] relative">
          <VideoComponent source="/woman-hero.mp4" />
          <div className="absolute top-8 md:grid md:grid-cols-2 gap-32 md:p-section p-mobile">
            <div className="border border-light-blue p-10 rounded-lg bg-gradient-to-b from-[#183B5C] to-[#040C12] card-glow w-full">
              <h2 className={headTextStyle}>EARN &</h2>
              <p className={subHeadTextStyle}>CLAIM YOUR STATUS!</p>
              <p className="md:leading-8 text-gray-300 text-xs md:text-base">
                The Chain Lords Guild aims to be the biggest collective of
                professional gamers in the world.
                <br />
                The internet is changing and blockchain, gaming, NFTs and the
                metaverse are the future of how humanity will interact and
                transact online.
                <br />
                Come take your place in history as a Lord of the metaverse . . .
                as a Chain Lord!
                <br />
                Together we are stronger!has the largest online gaming market in
                South East Asia
              </p>
            </div>
          </div>
        </section>
        <section
          id="games"
          className="text-center md:p-section p-mobile container"
        >
          <h2 className={headTextStyle}>PLAY TO EARN</h2>
          <p className={subHeadTextStyle}>FEATURED GAMES</p>
          <div className="grid md:grid-cols-4 grid-cols-2 md:my-20 my-8 justify-items-center gap-4">
            <CardGame src="/card/axie-inf.png" />
            <CardGame src="/card/big-time.png" />
            <CardGame src="/card/illuvium-featured-game.png" />
            <CardGame src="/card/star-atlas-featured.png" />
          </div>
          <p>More games Coming Soon</p>
        </section>
        <section className="bg-[url('/glory-mage.jpg')] min-h-screen md:p-section p-mobile bg-contain bg-no-repeat bg-center md:flex md:flex-row-reverse">
          <div className="text-center px-8">
            <h2 className={headTextStyle}>TOKEN</h2>
            <p className={subHeadTextStyle}>POWERED BY GLORY</p>
            <p className="md:text-3xl mb-4">Smart Contract</p>
            <Clipboard
              data-clipboard-text={textToCopy}
              onSuccess={handleCopy}
              className="flex items-center gap-3 cursor-pointer text-gray-300 whitespace-normal break-words break-all"
            >
              {textToCopy}
              <AiFillCopy />
            </Clipboard>
            <p className="my-6 text-3xl">Current & Future Network</p>
            <Image width={435} height={54} src="/network.png" alt="network" />
          </div>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <section
          id="features"
          className="md:p-section p-mobile text-center container"
        >
          <h2 className={headTextStyle}>COMING SOON</h2>
          <p className={subHeadTextStyle}>KEY FEATURES</p>
          <div className="grid md:grid-cols-3 grid-cols-2 my-20 gap-4">
            {feature.map((item, index) => {
              return (
                <FeaturesCard
                  key={index}
                  src={item.img}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </section>
        <section id="roadmap" className="md:p-36 px-5 text-center">
          <h2 className={headTextStyle}>GOALS</h2>
          <p className={subHeadTextStyle}>OUR ROADMAP</p>
          <div className="grid md:grid-cols-2 grid-cols-1 my-20 gap-10">
            <div className="flex flex-col gap-8">
              <CardWhitePaper
                isActive={false}
                number="01"
                desc={whitePaper.one}
              />
              <CardWhitePaper
                isActive={true}
                number="02"
                desc={whitePaper.two}
              />
              <CardWhitePaper
                isActive={false}
                number="03"
                desc={whitePaper.three}
              />
            </div>
            <div className="relative md:w-[584px] md:h-[600px] w-full h-[310px]">
              <Image
                fill
                src="/whitepaper-book.png"
                alt="book"
                className="animate-float"
              />
            </div>
          </div>
        </section>
        <PartnerComponent
          headTextStyle={headTextStyle}
          subHeadTextStyle={subHeadTextStyle}
        />
        <JoinUsComponent
          headTextStyle={headTextStyle}
          subHeadTextStyle={subHeadTextStyle}
        />
      </main>
    </>
  );
}
