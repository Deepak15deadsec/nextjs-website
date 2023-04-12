import React from "react";
import Box from "../../../../public/images/pay.png";
import Boxx from "../../../../public/images/safety-box.png";
import Boxxx from "../../../../public/images/security.png";
import Cardy from "../fold6/cardy";



const index = () => {
  return (


    <div className="bg-[#FF6154]   py-[8rem] justify-between xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[2rem]">

      <div className="lg:flex md:flex hidden">
        <div className="">
          <p className="text-left   font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            we are serious   </p>
          <p className="text-left w-[70%] font-[800] mt-[3rem] lg:text-[2.8rem] lg:leading-[3rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]"> about security, privacy and protection</p>

        </div>

        <div className=" grid gap-x-8 gap-y-5 pt-[5rem] grid-cols-1">

          <Cardy title1="it’s yours: forever & ever!" title2="we leave no stone unturned to ensure your privacy and security. 
your personal data and transactions are encrypted, and no data is shared with any agencies or advertisers. pinky promise!" />
          <Cardy title1="avni is secure" title2="we use bank level security(256 bit encryption) to ensure your information is safe and secure. We use multi-mactor and two-factor authentication to prevent unauthorized access, so your data and  wallet is safe." />

        </div>
      </div>

      <div className="lg:hidden md:hidden flex flex-col">
        <div className="">
          <p className="text-left   font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            we are serious   </p>
          <p className="text-left w-[70%] font-[800]  lg:text-[2.8rem] lg:leading-[3rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]"> about security, privacy and protection</p>

        </div>

        <div className=" grid gap-x-8 gap-y-5 pt-[5rem] grid-cols-1">

          <Cardy title1="it’s yours: forever & ever!" title2="we leave no stone unturned to ensure your privacy and security. 
your personal data and transactions are encrypted, and no data is shared with any agencies or advertisers. pinky promise!" />
          <Cardy title1="avni is secure" title2="we use bank level security(256 bit encryption) to ensure your information is safe and secure. We use multi-mactor and two-factor authentication to prevent unauthorized access, so your data and  wallet is safe." />

        </div>
      </div>

    </div>


  );
};

export default index;
