import React from "react";

const index = () => {
  return (
    <div className=" mt-[5rem] h-[17rem] bg-[#abb6c8] px-[2rem] w-full flex justify-center items-center space-x-10 lg:space-x-32 md:space-x-32">
      <div className=" space-y-4 items-center ">
        <p className="font-lettera-black font-[600] text-[3rem] tracking-normal leading-[3rem] text-[#01A4EF]">
          10k+
        </p>
        <p className="font-lettera-regular text-center font-[400] text-[1.5rem] tracking-normal leading-[1.5rem] text-[#01A4EF]">
          Members
        </p>
      </div>
      <div className=" space-y-4 justify-center items-center px-8 border-x border-[#AAAAAA]">
        <p className="font-lettera-black font-[600] text-center text-[3rem] tracking-normal leading-[3rem] text-[#FFB703]">
          $200K+
        </p>
        <p className="font-lettera-regular font-[400] text-center text-[1.5rem] tracking-normal leading-[1.5rem] text-[#FFB703]">
            Receipts Processed
        </p>
      </div>
      <div className=" space-y-4 items-center">
        <p className="font-lettera-black font-[600] text-center text-[3rem] tracking-normal leading-[3rem] text-[#FF6154]">
          800K+ 
        </p>
        <p className="font-lettera-regular font-[400] text-center text-[1.5rem] tracking-normal leading-[1.5rem] text-[#FF6154]">
          Avni Coins Earned
        </p>
      </div>
    </div>
  );
};

export default index;
