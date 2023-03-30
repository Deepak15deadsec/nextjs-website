import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Image from "next/image";
import Cardx from "./Cardx";
import Sr from "../../../../public/images/reward.png";
import Er from "../../../../public/images/receipt.png";
import If from "../../../../public/images/add-group.png";
import Od from "../../../../public/images/tap.png";

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className=" bg-[#008097] w-full  mt-[-8rem] ">
      <div className="my-[8rem] w-full xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[3rem] flex justify-between">
        <div className="space-y-[1rem] mb-[4rem] mt-[6rem]">
          <div className="flex justify-start  items-left">

            <div className="grid xs:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[3rem] mb-[4rem]">
              
              <Cardx img={Sr.src} content="50 $ART" title="Signup" />
              <Cardx img={Er.src} content="2 $ART" title="Shopping Receipt" />
              <Cardx img={If.src} content="50 $ART" title="Invite a friend" />
              <Cardx img={Od.src} content="upto 200 $ART" title="Opt-in data" />

            </div>

          </div>



        </div>
        <div className="  mb-[4rem] w-[50%] xl:mt-[5rem] lg:mt-[4rem] justify-right ">
          <p className="text-right font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
          actions are rewarding
          </p>
          <p className="text-right font-[500] mt-[2rem] md:mt-[4rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2.5rem] text-[#FFFFFF]">
    
          reward token for signup, opt-in, shopping receipt &  brand engagement  <br/> win exclusive digitial collectable (NFTs) regularly

          </p>
          
          <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
                    Collect yours
                    </button>
        </div>
      </div>

    </div>
  );
};

export default index;