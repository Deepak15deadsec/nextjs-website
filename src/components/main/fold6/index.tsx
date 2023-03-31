import React from "react";
import Cardx from "./Cardx";
import Box from "../../../../public/images/pay.png";
import Boxx from "../../../../public/images/safety-box.png";
import Boxxx from "../../../../public/images/security.png";
import Cardy from "../fold6/cardy";



const index = () => {
  return (
  

    <div className="bg-[#FF6154] flex py-[8rem] justify-between xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[2rem]">

      {/* <div className="grid xs:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-[7rem] ">
        <Cardx img={Box.src} content=" Avni is committed to consumer privacy. We never have and we never will sell you data to business or third parties. Period" title="We don't Sell your Data" />

        <Cardx img={Boxx.src} content="we leave no stone unturned to ensure your privacy and security. 
your personal data and transactions are encrypted, and no data is shared with any agencies or advertisers. pinky promise!" title="it’s yours: forever & ever!" />
        <Cardx img={Boxxx.src} content=" we use bank level security(256 bit encryption) to ensure your information is safe and secure. We use multi-mactor and two-factor authentication to prevent unauthorized access, so your data and  wallet is safe." title="avni is secure" />
      </div> */}


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
  );
};

export default index;
