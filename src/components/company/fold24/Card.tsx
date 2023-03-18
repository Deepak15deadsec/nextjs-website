import React from "react";
import Varun from '../../../../public/images/martin-circle.png';
import Image from "next/image";

const Card = () => {
  return (
    <div className="rounded-[1.75rem] bg-[#FF6154] p-2 space-y-2">
      <div className="flex space-x-4 items-center justify-center ">
        <div className="rounded-[6rem] shadow-[0_0px_20px_10px_rgba(0.8,0.8,0.8,0.2)]">
        <Image
          src={Varun.src}
          alt="Sandeep Nailwal"
          height={192}
          width={192}
          className="object-contain"
        />
</div>
      </div>
      <div className="space-y-[0.15rem]">
        <p className="text-[2.25rem] font-lettera-medium font-[600] text-center tracking-normal leading-[3.5rem] text-[#FFFFFF]">Martin Zielenski</p>


      </div>
      <p className=" text-[1.25rem] font-lettera-regular font-[400] text-center tracking-normal leading-[1.5rem] text-[#FFFFFF]">
      Co-founder & CMO
      </p>

    </div>
  );
};

export default Card;
