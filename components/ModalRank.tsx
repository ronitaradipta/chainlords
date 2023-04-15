import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, FC, useState, useEffect } from "react";
import CarouselRank from "./CarouselRank";
import { AiOutlineClose } from "react-icons/ai";

interface ModalRankProps {
  tiers: any;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalRank: FC<ModalRankProps> = ({ isOpen, closeModal, tiers }) => {
  const [idTier, setIdTier] = useState(11);

  useEffect(() => {
    setIdTier(11);
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto overflow-x-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl card-item p-12 text-left align-middle shadow-xl transition-all">
                <button
                  className="text-2xl text-description absolute right-5 top-5"
                  onClick={closeModal}
                >
                  <AiOutlineClose />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-base text-title uppercase"
                >
                  Your Current Rank
                </Dialog.Title>
                <div className="flex items-center justify-between">
                  <div className="w-6/12">
                    <h2 className="text-4xl font-bold">{tiers[idTier].name}</h2>
                    <p className="text-sm text-description mt-2">
                      {tiers[idTier].description}
                    </p>
                    <div className="mt-4">
                      <button className="bg-blue py-2 px-4">Claim NFT</button>
                    </div>
                  </div>
                  <div className="w-6/12 flex justify-center">
                    <div className="w-64 aspect-square relative">
                      <Image fill src={tiers[idTier].image} alt="shield" />
                    </div>
                  </div>
                </div>
                <div className="w-full h-8 relative">
                  <Image fill src="/rank/rankSeparator.png" alt="separator" />
                </div>
                <CarouselRank tiers={tiers} setIdTier={setIdTier} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default ModalRank;
