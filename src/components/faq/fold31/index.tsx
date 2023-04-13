import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
// import Faq from '../../../../public/images/faq.svg'
import Faq from '../../../../public/images/faq.png'
import Image from 'next/image'

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="w-full bg-[#36454f]">
      <div className="py-[4rem]  w-full xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[2rem] lg:flex md:flex hidden justify-between">
        <div className="space-y-[2.5rem] w-3/4 mt-[10rem] ">
          <p className="font-Open-Sans text-[#ffffff] font-[600] text-[3.75rem] tracking-normal leading-[4.5rem]">
            help desk
          </p>
          <p className="font-sans text-[#ffffff] font-[400] text-[1.5rem] text-left tracking-normal leading-[2rem]">
            get instant support for all your needs with our reliable help desk services to keep you connected and productive.
          </p>

        </div>
        <div className="ml-[10rem] w-3/4 ">
          <div className="flex justify-center items-center mt-[4rem]">
            <Image
              src={Faq.src}
              alt="Fortune"
              height={493}
              width={400}
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />
          </div>
        </div>
      </div>

      <div className="py-[4rem]  w-full xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[2rem] lg:hidden md:hidden flex justify-between">
        <div className="space-y-[2.5rem]  mt-[0rem] ">
          <p className="font-Open-Sans text-[#ffffff] font-[600] text-[3.75rem] tracking-normal leading-[4.5rem]">
            help desk
          </p>
          <p className="font-sans text-[#ffffff] font-[400] text-[1.5rem] text-left tracking-normal leading-[2rem]">
            get instant support for all your needs with our reliable help desk services to keep you connected and productive.
          </p>

        </div>
        <div className="  ">
          <div className="flex justify-center items-center mt-[4rem]">
            <Image
              src={Faq.src}
              alt="Fortune"
              height={493}
              width={400}
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
