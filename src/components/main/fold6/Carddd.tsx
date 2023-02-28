import React from "react";
import Box from "../../../../public/images/security.png";

const Carddd = () => {
  return (
    <div className="rounded-[1.75rem] bg-[#FFFFFF] p-8 space-y-2">
      <div className="flex space-x-4 items-center">
        <img
          src={Box.src}
          alt="Sandeep Nailwal"
          className="w-[6.5rem] h-[6.5rem] object-contain"
        />
        
      </div>

      <div className="space-y-[3.75rem]">
          <p className="text-[2.5rem] font-lettera-medium font-[600]  tracking-normal leading-[3.5rem] text-[#F14F20]">Avni is Secure</p>
          <p className="text-[1rem] font-lettera-regular font-[400]  tracking-normal leading-[1.5rem] text-[#AAAAAA] mt-[5rem]">
      We use bank level security(256 bit encryption) to ensure your information is safe and secure. We use Multi-Factor and Two-Factor Authentication to prevent unauthorized access, so your wallet is safe.
      </p>
          
        </div>

      
      
    </div>
  );
};

export default Carddd;