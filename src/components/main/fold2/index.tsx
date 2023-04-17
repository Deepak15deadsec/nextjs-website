import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Image from "next/image";
import Cardy from "./cardy";
import Sr from "../../../../public/images/reward.png";
import Er from "../../../../public/images/receipt.png";
import If from "../../../../public/images/add-group.png";
import Od from "../../../../public/images/tap.png";
import Coin from "../../../../public/images/coinnikel.png"

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className=" bg-[#008097] w-full  mt-[-8rem] ">
      <div className="my-[8rem]  w-full xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[3rem] lg:flex md:flex hidden justify-between">

        <div className="  mb-[10rem]  xl:mt-[8rem] lg:mt-[8rem] mt-[3rem] justify-left ">
          <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            actions are rewarding
          </p>
          <p className="text-left font-[500] mt-[2rem] md:mt-[4rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2.5rem] text-[#FFFFFF]">

            win exclusive digitial collectibles (NFTs) regularly

          </p>

          <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
            Collect yours
          </button>
        </div>

        <div className="space-y-[1rem] mb-[4rem] ml-[25rem] mt-[15rem]">
          <div className="flex justify-right  items-right">
            <div className=" grid gap-x-8  grid-cols-1">

              <Cardy img={Coin.src} title1="signup" title2="50 tokens" />
              <Cardy img={Coin.src} title1="shopping receipt" title2="2 tokens" />
              <Cardy img={Coin.src} title1="invite a friend" title2="50 tokens" />
              <Cardy img={Coin.src} title1="opt-in data" title2="upto 200 tokens" />
            </div>
          </div>



        </div>
      </div>

      <div className=" my-[0rem] w-full xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[3rem] lg:hidden md:hidden flex flex-col">

        <div className="  mb-[4rem]  xl:mt-[5rem] lg:mt-[4rem] mt-[3rem] justify-left ">
          <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            actions are rewarding
          </p>
          <p className="text-left font-[500] mt-[2rem] md:mt-[4rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2.5rem] text-[#FFFFFF]">

            win exclusive digitial collectibles <br />(NFTs) regularly

          </p>

          <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
            Collect yours
          </button>
        </div>

        <div className="space-y-[1rem] mb-[10rem]  mt-[1rem]">
          <div className="flex justify-right  items-left">
            <div className=" grid gap-x-8  grid-cols-1">

              <Cardy img={Coin.src} title1="signup" title2="50 tokens" />
              <Cardy img={Coin.src} title1="shopping receipt" title2="2 tokens" />
              <Cardy img={Coin.src} title1="invite a friend" title2="50 tokens" />
              <Cardy img={Coin.src} title1="opt-in data" title2="upto 200 tokens" />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default index;