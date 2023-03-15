import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Video from '../../../../public/images/video.svg'
import Image from 'next/image'

const index = () => {
  const router = useRouter();
  const {googleUrl} = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="w-full bg-[#EEEEEE]">
    <div className="py-[4rem]  w-full xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] flex justify-between">
        <div className="space-y-[2.5rem] w-3/4 mt-[10rem] ">
          <p className="font-Open-Sans text-[#333333] font-[600] text-[3.75rem] tracking-normal leading-[4.5rem]">
            Help Desk
          </p>
          <p className="font-sans text-[#333333] font-[400] text-[1.5rem] text-left tracking-normal leading-[2rem]">
          Get instant support for all your needs with our reliable Help Desk services to keep you connected and productive.
          </p>

        </div>
        <div className="space-y-[8rem] w-3/4 ">
          <div className="flex justify-center items-center mt-[4rem]">
            <Image
              src={Video.src}
              alt="Fortune"
              height={493}
              width={881}
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default index;
