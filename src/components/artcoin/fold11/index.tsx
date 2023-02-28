import React from "react";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../../google";
import shapes from '../../../../public/images/artcoin.svg'
import Image from "next/image";


const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };

  return (
    <div className="w-full bg-[#EEEEEE]">

      <div className="  w-full  py-[5rem] flex justify-between xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem]">
        <div className="space-y-[1.5rem] w-3/4 mt-[3rem]  ">
          <p className="text-left font-[600] text-[3rem] leading-[5rem]">
            We help online business grow.<br /> Together
          </p>
          <p className="text-left font-[400] text-[1.5rem] leading-[2rem]">
            Earn crypto rewards with every shopping receipts <br /> and
            personalised offers from brands
          </p>

          <button className="rounded-[1rem] bg-[#01A4EF]  p-8 space-y-5 w-[13rem] h-[5rem]">

            <div className="flex space-x-1 ">

              <div className="space-y-[0.15rem] ">
                <p className="text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">White Paper</p>
              </div>
            </div>


          </button>

        </div>
        <div className="space-y-[8rem] w-2/4 ">
          <div className=" flex justify-end mt-[8rem] lg:mt-[0rem] md:mt-[0rem] items-center  " >
            <div>
              < Image
                height={814}
                width={600}
                src={shapes.src}
                alt="Avni Hero"
                className="object-contain"
              />

            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default index;
