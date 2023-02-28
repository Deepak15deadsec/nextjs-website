import React from "react";
import FRR from "../../../../public/images/man.svg";
import Image from "next/image";

const Cardddd = () => {
  return (
    <div className="rounded-[1rem] shadow-[0_0px_60px_0px_rgba(0.2,0.2,0.2,0.2)] bg-[#EEEEEE] p-8  space-y-5 lg:w-[23rem] lg:h-[23rem] ">
      <div className="flex space-x-4 justify-center">
      <Image
          src={FRR.src}
          alt="Sandeep Nailwal"
          height={208}
          width={208}
          className=" object-contain"
        />
      </div>
      <div className="flex space-x-4 justify-center">

        <div className="space-y-[0.15rem]">
          <p className="text-[2.25rem] font-lettera-medium font-[600] text-center tracking-normal leading-[3rem] text-[#333333]">Reffral Reward<br />$.1 worth $ART</p>


        </div>
      </div>
      
    </div>
  );
};

export default Cardddd;