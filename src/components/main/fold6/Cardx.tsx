import React from "react";
import Box from "../../../../public/images/reward.png";
import Image from "next/image";

const Cardx = ({img, content, title }:{img:string, content:string, title:string}) => {
  return (
    <div className="rounded-[1.75rem] bg-[#FFFFFF] p-8 space-y-2 w-auto">
      <div className="flex space-x-4 items-center">
        <img
          src={img}
          alt="Sandeep Nailwal"
          className=" object-contain"
        />

      </div>
      <div className="space-y-[0.15rem]">
        <p className="text-[2.5rem] font-lettera-medium font-[600]  tracking-normal leading-[2.5rem] text-[#F14F20]">{title}</p>


      </div>
      <p className=" text-[1.4rem] font-lettera-regular font-[400]  tracking-normal leading-[1.8rem] text-[#434343]">
      {content}
      </p>

    </div>
  );
};

export default Cardx;