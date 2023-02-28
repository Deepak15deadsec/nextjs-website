import React from "react";
import Box from "../../../../public/images/pay.png";

const Card = () => {
  return (
    <div className="rounded-[1.75rem] bg-[#FFFFFF] p-8 space-y-2">
      <div className="flex space-x-4 items-center">
        <img
          src={Box.src}
          alt="Sandeep Nailwal"
          className="w-[6.5rem] h-[6.5rem] object-contain"
        />

      </div>
      <div className="space-y-[0.15rem]">
        <p className="text-[2.5rem] font-lettera-medium font-[600]  tracking-normal leading-[3.5rem] text-[#F14F20]">We don't Sell your<br/> Data</p>


      </div>
      <p className=" text-[1rem] font-lettera-regular font-[400]  tracking-normal leading-[1.5rem] text-[#AAAAAA]">
        Avni is committed to consumer privacy. We never have and we never will sell you data to business or third parties. Period
      </p>

    </div>
  );
};

export default Card;
