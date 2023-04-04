import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Logo from "../../../../public/images/ylogo.svg"
import Image from "next/image";

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="w-full bg-[#FFCB48] ">


      <div className="my-[5rem] w-full xl:px-[22rem] lg:px-[8rem] md:px-[4rem] px-[2rem] flex justify-between ">
        <div className="space-y-[1rem] w-2/4 mb-[4rem] mt-[4rem]">
          <div className="flex justify-start  items-center ">
            <Image
              height={333}
              width={341}
              src={Logo.src}
              alt="Fortune"
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />

          </div>

          {/* <div className="flex items-center space-x-2">
            <img
              src="https://cdn.juno.finance/juno-main-landing/alert-circle.svg"
              alt="Alert Circle"
              className="w-4 h-4 object-contain"
            />
            <p className="font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1rem] text-[#b3b3b3]">
              Bonus Disclosure
            </p>
          </div> */}
        </div>
        <div className="space-y-[1rem] w-3/4 justify-center mt-[8rem]">

          <p className="font-sans-regular text-left text-[#333333] font-[400] text-[1.2rem] tracking-normal leading-[1.7rem]">
            BAT has seen stunning results since its integration into the Brave browser’s first global private ad platform: 55 million monthly active users, 16 million daily active users, 1.5 million verified creators accepting BAT, millions of wallets created, thousands of ad campaigns with leading brands, and growing utility in the most innovative names in blockchain gaming. The results make BAT one of the most, if not the most, successful alt–coin projects to date. BAT is now bridged across Ethereum and Solana blockchains, and offers utility to both ecosystems.
          </p>
          <button className="bg-[#FFFFFF] rounded-[0.75rem] p-3.5 font-lettera-medium font-[500] text-[1rem] text-[#FFCB48] tracking-normal leading-[1.33rem]">
            Know More
          </button>
        </div>
      </div>

    </div>
  );
};

export default index;
