import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Logo from '../../../../public/images/ishape.png';

const index = () => {
  const router = useRouter();
  const {googleUrl} = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="w-full bg-[#EEEEEE] ">


      <div className="my-[5rem] w-full xl:px-[22rem] lg:px-[8rem] px-[3rem] flex justify-between ">
        <div className="space-y-[2rem] w-3/4 mb-[4rem] mt-[5rem]">

          <p className="text-[3.75rem] mt-[6rem] font-sans font-[600] text-left tracking-normal leading-[4.2rem] text-[#333333]">In an ad world of "Impressions" <br></br> try "Transactions"</p>

          <p className="text-[2rem] mt-[6rem] font-sans font-[450] text-left tracking-normal leading-[3.2rem] text-[#72858c]">Reach out to users through a rewarding platform like avni with truly personalized offers</p>          

                  </div>
        <div className="space-y-[1rem] w-2/4 justify-center mt-[5rem]">

          <div className="flex justify-start  items-center ml-[4rem] mt-[0rem]">
            <img
              src={Logo.src}
              alt="Fortune"
              height="700px"
              width="700px"
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />

          </div>
        </div>
      </div>

    </div>
  );
};

export default index;
