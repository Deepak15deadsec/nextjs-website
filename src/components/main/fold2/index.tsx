import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Image from "next/image";
import Cardx from "./Cardx";
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
      <div className="my-[8rem] w-full xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[3rem] flex justify-between">
       
        <div className="  mb-[4rem]  xl:mt-[5rem] lg:mt-[4rem] justify-left ">
          <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            actions are rewarding
          </p>
          <p className="text-left font-[500] mt-[2rem] md:mt-[4rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2.5rem] text-[#FFFFFF]">

            win exclusive digitial collectable (NFTs) regularly

          </p>

          <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-5  font-lettera-medium font-[700]  lg:text-[2rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
            Collect yours
          </button>
        </div>

        <div className="space-y-[1rem] mb-[4rem] ml-[25rem] mt-[15rem]">
          <div className="flex justify-right  items-right">

            {/* <div className="grid xs:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[3rem] mb-[4rem]">
              
              <Cardx img={Sr.src} content="50 $ART" title="Signup" />
              <Cardx img={Er.src} content="2 $ART" title="Shopping Receipt" />
              <Cardx img={If.src} content="50 $ART" title="Invite a friend" />
              <Cardx img={Od.src} content="upto 200 $ART" title="Opt-in data" />

            </div> */}

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