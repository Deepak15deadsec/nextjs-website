import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Videoo from '../../../public/images/video.svg'
export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex justify-center items-center mt-[4rem]">
            <img
              src={Videoo.src}
              alt="Fortune"
              height="493px"
              width="881px"
              onClick={openModal}
              className=" object-contain cursor-pointer"
            />
            
          </div>
        
     
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
          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-[60%] h-[60%] p-2 flex justify-center items-center transform overflow-hidden rounded-2xl bg-white  shadow-xl transition-all">
                  <video
                    className="rounded-[10px]"
                    width="100%"
                    height="100%"
                    src="https://res.cloudinary.com/dgjxmcrkg/video/upload/v1676979834/AVNI_explained_okvmjq.mp4"
                    controls
                    autoPlay
                  >
                    The browser does not support videos.
                  </video>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}