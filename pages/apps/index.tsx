import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import tier from "../../constant/rankTiers";
import Image from "next/image";
import MainButton from "@/components/MainButton";
import TooltipComponent from "@/components/TooltipComponent";
import ModalRank from "@/components/ModalRank";
import ProgressBar from "@/components/ProgressBar";

const Apps = () => {
  let [isOpen, setIsOpen] = useState(false);
  const progressRank = 1000000;

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <DashboardLayout title="DASHBOARD">
      <>
        <div className="flex mt-14 gap-10">
          <div className="flex gap-4 items-center w-8/12">
            <div className="w-56 aspect-square relative">
              <Image fill src={tier[11].image} alt="rank" />
            </div>
            <div>
              <h2 className="font-bold text-2xl opacity-[85%]">LORD RONIN</h2>
              <p className="opacity-[65%] text-lg mb-3">{tier[11].name}</p>
              <p className="opacity-[65%] text-base mb-2">
                {progressRank} / {tier[11].range}
              </p>
              <ProgressBar bgcolor="#BD2735" completed={50} />
              <button
                className="bg-blue py-2 px-4 w-full mt-4"
                onClick={openModal}
              >
                VIEW RANKS
              </button>
            </div>
          </div>
          <div className="w-full card-item flex p-10">
            <div></div>
            <div>
              <div className="flex items-start gap-1">
                <TooltipComponent text="Unclaimed Rewards" />
              </div>
              <p>--</p>
            </div>
          </div>
        </div>
        <div className="mt-14 rounded-lg card-item">
          <table className="w-full text-sm text-left rounded-lg">
            <thead className="text-base text-title">
              <tr className="border-b border-white border-opacity-30">
                <th scope="col" className="px-10 py-5 font-normal">
                  Token Pair
                </th>
                <th scope="col" className="px-10 py-3 font-normal">
                  <TooltipComponent text="APR" />
                </th>
                <th scope="col" className="px-10 py-3 font-normal">
                  <TooltipComponent text="My Balance" />
                </th>
                <th scope="col" className="px-10 py-3 font-normal">
                  <TooltipComponent text="Rewards" />
                </th>
                <th scope="col" className="px-10 py-3 font-normal"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <th
                  scope="row"
                  className="px-10 py-4 font-medium  whitespace-nowrap uppercase text-lg flex items-center gap-3"
                >
                  <Image
                    width={60}
                    height={60}
                    src="/glory-token.png"
                    alt="token"
                  />
                  GLORY
                </th>
                <td className="px-10 py-4 text-lg">100%</td>
                <td className="px-10 py-4 text-lg">$1000</td>
                <td className="px-10 py-4 text-lg">$1000</td>
                <td className="px-10 py-4 text-end">
                  <MainButton text="Manage" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ModalRank isOpen={isOpen} closeModal={closeModal} tiers={tier} />
      </>
    </DashboardLayout>
  );
};

export default Apps;
