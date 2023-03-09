import React from "react";
import { FcGoogle } from "react-icons/fc";
import phone from '../../../../public/images/phone-shape.svg'
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../../google";
import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const [value, setValue] = useState()

  const google = async () => {
    await router.push(googleUrl);
  };

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (

    <div className="bg-[#434343] py-[13rem] flex flex-col justify-center items-center xl:px-[22rem] lg:px-[12rem] md:px-[10rem] px-[8rem]  space-y-7">
      <p className="text-center font-[800] lg:text-[10rem] lg:leading-[10.5rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
        Rewards for<br />proof of shopping
      </p>

      <p className=" text-center font-[500] pt-[1rem] lg:text-[3.8rem] lg:leading-[4.2rem] md:text-[2.2rem] md:leading-[2.5rem] leading-[1.8rem] text-[1.5rem] text-[#FFFFFF]">
        Earn crypto rewards with every shopping receipt with personalized brand offers
      </p>

      <p className="pt-[3rem] pb-[1rem] lg:text-[1.75rem] md:text-[1.5rem] text-[0.8rem] font-Open-Sans font-[400] tracking-normal leading-[2.5rem]   text-[#57CC99]">Join 10K+ members who are already joined our pre launch program for earning rewards and offers everyday</p>



      <>
        <div className=" inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="bg-[#FFFFFF]  rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]"
          >
            Join now
          </button>
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
                  <Dialog.Panel className="w-[130vh] h-[75vh] transform  rounded-[5rem] bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      className="text-[#333333] mt-[3rem] text-[3rem] px-[3rem] w-[50%] font-[600] leading-[3rem]"
                    >
                      enter your phone number
                      to get the link via SMS
                    </Dialog.Title >
                   


                    <div className="mt-[2rem] flex justify-end space-x-[0.5rem]">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-[1.5rem] font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Verify
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-[1.5rem] font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>

      {/* <button
        onClick={google}
        className="h-[4rem]  flex justify-center items-center text-white shadow-lg  font-[400] text-[1.5rem]  leading-[3rem]"
      >
        <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
          <FcGoogle size={50} />
        </div>
        <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
          <p>Sign in with Google</p>
        </div>
      </button> */}

    </div >






  );
};

export default index;
