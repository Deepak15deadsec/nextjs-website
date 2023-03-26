import React from "react";
import PopupModal from "../../../components/popup/PopupModal";
import { FcGoogle } from "react-icons/fc";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";


const index = () => {
  const router = useRouter();
  const {googleUrl} = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="bg-[#434343] py-[20rem] flex flex-col justify-center items-center xl:px-[22rem] lg:px-[12rem] px-[3rem]">
      <p className="text-[3.8rem]  font-sans w-[94%] font-[500] text-center tracking-normal leading-[4rem] text-[#FFFFFF] ">Building a one stop <br></br> trusted gateway for the world of <br></br> digital Advertising</p>

      <p className="text-[3rem] mt-[4rem] font-sans font-[500] text-center w-[80%] tracking-normal leading-[3.5rem] text-[#AAAAAA]">Avni aims to empower brands with suited ad solutions powered by Web3</p>

      <button
      onClick={google}
       className="rounded-[1rem]  bg-[#01A4EF] mt-[3rem] p-3 space-y-5 w-[10rem] h-[5rem]">
        <p className="text-[1.5rem]  font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]">Join Now</p>
      </button>

    </div>
  );
};

export default index;
