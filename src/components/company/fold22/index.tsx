import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Image from "next/image";
import Hear from "../../../../public/images/hear.png"

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="bg-[#7526f4] lg:py-[15rem] md:py-[15rem] py-[7rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">

      <div className="lg:flex md:flex hidden justify-between lg:px-[7rem] md:px-[7rem]  py-5">
        <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">

          <p className="text-left  w-[60%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            heard and  valued </p>

          <p className="text-left font-[500] w-[60%] mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
            build a lasting relationship between consumers and brands with mutual respect and values beyond transactions
          </p>



        </div>

        <div className="lg:flex md:flex hidden pt-12">
          < Image
            height={500}
            width={500}
            src={Hear.src}
            alt="ambassador hero"
            className="object-contain"
          />


        </div>


        <div className="lg:hidden md:hidden flex pb-72">
          < Image
            height={300}
            width={300}
            src={Hear.src}
            alt="ambassador hero"
            className="object-contain"
          />


        </div>


      </div>


      <div className="lg:hidden md:hidden flex justify-between lg:px-[7rem] md:px-[7rem]  py-5">
        <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">

          <p className="text-left  w-[60%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            heard and  valued </p>

          <p className="text-left font-[500]  mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
            build a lasting relationship between consumers and brands with mutual respect and values beyond transactions
          </p>



        </div>

        <div className="lg:flex md:flex hidden pt-12">
          < Image
            height={500}
            width={500}
            src={Hear.src}
            alt="ambassador hero"
            className="object-contain"
          />


        </div>


        <div className="lg:hidden md:hidden flex pb-62">
          < Image
            height={300}
            width={300}
            src={Hear.src}
            alt="ambassador hero"
            className="object-contain"
          />


        </div>


      </div>

    </div>
  );
};

export default index;
