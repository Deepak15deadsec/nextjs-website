import React from "react";
import { FaUnlock } from "react-icons/fa";
import { RiFingerprint2Line } from "react-icons/ri";
import { HiDatabase } from "react-icons/hi";

const index = () => {
  return (
    <div className="bg-gradient-to-br from-[#4BA173] to-[#80CF9C] h-[100vh] px-[10rem]">
      <div className="w-full flex justify-center items-center pt-[2rem]">
        <p className="text-left text-white font-lettera-bold font-[700] text-[2.5rem] tracking-normal leading-[2.83rem]">
          We're serious about security and protecting you
        </p>
      </div>

      <div className="flex space-x-[4rem] justify-center items-center mt-[4rem]">
        <div className="w-[8rem] h-[8rem] rounded-full bg-gradient-to-br from-[#4BA173] to-[#80CF9C] flex justify-center items-center shadow-lg">
          <FaUnlock size={50} color="white" />
        </div>
        <div className="space-y-[0.5rem] w-[55%]">
          <p className="text-left text-white font-lettera-bold font-[900] text-[1.25rem] tracking-normal leading-[1.83rem]">
            We don't Sell your Data
          </p>
          <p className="text-left text-white font-lettera-regular font-[400] text-[1rem] tracking-normal leading-[1.25rem]">
            Avni is committed to consumer privacy. We never have and we never
            will sell you <br /> data to business or third parties. Period.
          </p>
        </div>
      </div>

      <div className="flex space-x-[4rem] justify-center items-center mt-[4rem]">
        <div className="w-[8rem] h-[8rem] rounded-full bg-gradient-to-br from-[#4BA173] to-[#80CF9C] flex justify-center items-center shadow-lg">
          <HiDatabase size={70} color="white" />
        </div>
        <div className="space-y-[0.5rem] w-[55%]">
          <p className="text-left text-white font-lettera-bold font-[900] text-[1.25rem] tracking-normal leading-[1.83rem]">
            what’s yours remains only yours.
          </p>
          <p className="text-left text-white font-lettera-regular font-[400] text-[1rem] tracking-normal leading-[1.25rem] test-justify">
            We take your privacy and security seriously and ensure that all your
            personal data and transactions are encrypted, and secured so there’s
            no room for mistakes. Come and join the thousands of satisfied users
            today!
          </p>
        </div>
      </div>

      <div className="flex space-x-[4rem] justify-center items-center mt-[4rem]">
        <div className="w-[8rem] h-[8rem] rounded-full bg-gradient-to-br from-[#4BA173] to-[#80CF9C] flex justify-center items-center shadow-lg">
          <RiFingerprint2Line size={80} color="white" />
        </div>
        <div className="space-y-[0.5rem] w-[54%]">
          <p className="text-left text-white font-lettera-bold font-[900] text-[1.25rem] tracking-normal leading-[1.83rem]">
            Avni is Secure
          </p>
          <p className="text-left text-white font-lettera-regular font-[400] text-[1rem] tracking-normal leading-[1.25rem]">
             We use bank-level security (256-bit encryption) to ensure your information is safe and secure.
             we use Multi-Factor and Two-Factor Authentication to prevent unauthorized access, so your wallet is safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
