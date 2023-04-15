import Image from "next/image";
import React, { FC } from "react";
import chainlord from "../../assets/chainlords-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiWallet } from "react-icons/bi";
import { MdDashboard, MdOutlineHowToVote } from "react-icons/md";
import { HiCircleStack } from "react-icons/hi2";
import { GiFarmTractor } from "react-icons/gi";
import { BsShop, BsBox } from "react-icons/bs";

interface DashboardLayoutProps {
  children: React.ReactElement;
  title: string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, title }) => {
  const router = useRouter();
  const menuItems = [
    {
      label: "Dashboard",
      link: "/apps",
      icon: <MdDashboard className="text-2xl" />,
    },
    {
      label: "Staking",
      link: "/apps/staking",
      icon: <HiCircleStack className="text-2xl" />,
    },
    {
      label: "Farming",
      link: "/apps/farming",
      icon: <GiFarmTractor className="text-2xl" />,
    },
    {
      label: "NFT Marketplace",
      link: "/apps/nft-marketplace",
      icon: <BsShop className="text-2xl" />,
    },
    {
      label: "Treasury",
      link: "/apps/treasury",
      icon: <BsBox className="text-2xl" />,
    },
    {
      label: "Governance",
      link: "/apps/governance",
      icon: <MdOutlineHowToVote className="text-2xl" />,
    },
  ];
  return (
    <main className="bg-[url('/bg-staking.jpg')] min-h-screen w-full bg-cover bg-no-repeat bg-center flex">
      <div className="w-2/12 border-r border-r-gray-700 h-screen py-10 pl-10 sticky top-0">
        <nav>
          <Link href="/">
            <Image
              src={chainlord}
              width={150}
              alt="logo"
              className="drop-shadow-[1px_1px_12px_#3EA2FD]"
            />
          </Link>
          <ul className="mt-20 flex flex-col gap-8">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`${
                      router.pathname == item.link
                        ? "text-blue text-shadow-blue border-r-2 border-r-blue"
                        : "text-gray-500"
                    } py-2 w-full flex items-center gap-3`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="w-10/12 p-10">
        <header className="flex justify-end">
          <button className="py-2 px-4 border-2 border-blue text-blue flex items-center gap-3 bg-black rounded-md">
            <BiWallet />
            Connect Wallet
          </button>
        </header>
        <h1 className="text-3xl text-white opacity-[85%] font-semibold">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
