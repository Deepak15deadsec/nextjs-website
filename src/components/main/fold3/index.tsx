import React from "react";
import { FcGoogle } from "react-icons/fc";

const Fold3 = () => {
  return (
    <div className="mt-[10rem] w-full px-[10rem] flex justify-between">
      <div className="space-y-[1.5rem]">
        <p className="font-lettera-bold text-white font-[700] text-[3.75rem] tracking-normal leading-[3.86rem]">
          Earn 5% back on <br /> crypto spends
        </p>
        <p className="font-lettera-regular text-[#b3b3b3] font-[400] text-[1.25rem] tracking-normal leading-[2rem]">
          Spend cash or crypto with the Avni® debit card and <br /> earn 5% back
          on your favorite brands. Be it shopping <br /> on Amazon or ordering
          with Doordash, you decide.
        </p>

        <div className="flex items-center space-x-4">
          <img
            src="https://cdn.juno.finance/juno-main-landing/finder-awards.png"
            alt="awards"
            className="w-16 h-16 object-contain"
          />

          <div className="space-y-[0.2rem]">
            <p className="font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1rem] text-white">Best crypto debit card</p>
            <p className="font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1rem] text-[#b3b3b3]">
              Finder Awards 2022
            </p>
          </div>
        </div>

        <button className="w-[250px] h-[38px] flex justify-center items-center shadow-lg text-white font-lettera-medium font-[500] text-[1.2rem] tracking-normal leading-[2rem] -ml-1.5">
              <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
                <FcGoogle size={28} />
              </div>
              <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
                <p>Sign in with Google</p>
              </div>
            </button>


        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.juno.finance/juno-main-landing/alert-circle.svg"
            alt="Alert Circle"
            className="w-4 h-4 object-contain"
          />

          <p className="font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1rem] text-[#b3b3b3]">
            Cashback Disclosure
          </p>
        </div>
      </div>

      <img
        src="https://cdn.juno.finance/juno-main-landing/5-percent-cashback.png"
        alt="avni-benefits"
        height="530px"
        width="500px"
        className="object-contain"
      />
    </div>
  );
};

export default Fold3;
