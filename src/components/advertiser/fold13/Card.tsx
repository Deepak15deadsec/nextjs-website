import React from "react";
import FRR from "../../../../public/images/man.svg"


const Card = () => {
  return (
    <div className="rounded-[1rem] shadow-[0_0px_20px_0px_rgba(0.2,0.2,0.2,0.2)] bg-[#EEEEEE]  p-8 space-y-5 w-[17rem] h-[17rem]">
      <div className="flex space-x-3 justify-center">
      <img
          src={FRR.src}
          alt="Sandeep Nailwal"
          className="w-[9rem] h-[9rem] object-contain"
        />
      </div>
      <div className="flex space-x-4 justify-center">

        <div className="space-y-[0.15rem]">
          <p className="text-[1.5rem] font-lettera-medium font-[400] text-center tracking-normal leading-[2rem] text-[#333333]">Signup Reward<br />$.1 worth $ART</p>


        </div>
      </div>
      
    </div>
  );
};

export default Card;