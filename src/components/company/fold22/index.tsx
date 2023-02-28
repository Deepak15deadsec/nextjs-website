import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Logo from '../../../../public/images/ishape.svg';

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

          <p className="text-[3.75rem] mt-[6rem] font-sans font-[600] text-left tracking-normal leading-[4.2rem] text-[#333333]">We build bridges between companies $ customers</p>

          <p className="text-[1.5rem] w-[80%] mt-[3rem] font-sans font-[400] text-left tracking-normal leading-[2.2rem] text-[#333333]">a rewarding platform,that bridges gap between advertisers and users</p>



        </div>
        <div className="space-y-[1rem] w-2/4 justify-center mt-[5rem]">

          <div className="flex justify-start  items-center ml-[4rem] mt-[0rem]">
            <img
              src={Logo.src}
              alt="Fortune"
              height="333px"
              width="341px"
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />

          </div>
        </div>
      </div>

    </div>
  );
};

export default index;
