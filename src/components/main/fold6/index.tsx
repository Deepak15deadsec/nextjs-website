import React from "react";
import Card from './Card'
import Cardd from './Cardd'
import Carddd from './Carddd'
import Cardx from "./Cardx";
import Box from "../../../../public/images/pay.png";
import Boxx from "../../../../public/images/safety-box.png";
import Boxxx from "../../../../public/images/security.png";

const cards = [
  {
    title: "Signup Reward",
    content: <span>Get access to additional <br /> cashback with $ART</span>,
    url: "https://cdn.juno.finance/juno-main-landing/cash-back.png",
  },

  {
    title: "Receipt Reward",
    content: <span>Claim gift cards from 50+ <br /> brands with $ART</span>,
    url: "https://cdn.juno.finance/juno-main-landing/claim-gift-card.png",
  },

  {
    title: "Referral Reward",
    content: <span>Claim co-branded <br /> Ledger Nano S with $ART</span>,
    url: "https://cdn.juno.finance/juno-main-landing/ledger-nano.png",
  },

];

const index = () => {
  return (
    // <div className="bg-[#FF6154] mt-[0rem]  flex flex-col justify-center items-center xl:px-[40rem] lg:px-[7rem] md:px-[4rem] px-[7rem]">
    //   <p className="text-[4rem] mt-[6rem] font-lettera-bold font-[600] text-center tracking-normal leading-[5rem] text-white">We are serious about security  <br/> and protecting you</p>

    //   <div className="grid xs:grid-cols-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-[3rem] mb-[4rem]">
    //      <Card/>
    //      <Cardd/>
    //      <Carddd/>
    //   </div>


    // </div>

    <div className="bg-[#FF6154] flex py-[2rem] justify-between xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem]">

      <div className="grid xs:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[7rem] ">
        {/* <Cardx img={Box.src} content=" Avni is committed to consumer privacy. We never have and we never will sell you data to business or third parties. Period" title="We don't Sell your Data" /> */}
        <Cardx img={Boxx.src} content="We leave no stone unturned to ensure your privacy and security. 
Your personal data and transactions are encrypted, and no data is shared with any agencies or advertisers. Pinky Promise! ." title="It’s yours: Forever & Ever!" />
        <Cardx img={Boxxx.src} content=" We use bank level security(256 bit encryption) to ensure your information is safe and secure. We use Multi-Factor and Two-Factor Authentication to prevent unauthorized access, so your data and  wallet is safe." title="Avni is Secure" />
      </div>

      <p className="lg:text-[6.5rem] text-[3rem] mt-[3rem] leading-[3rem] font-lettera-bold font-[600] w-[38%] text-right tracking-normal lg:leading-[6.5rem] text-white">We are serious about security, privacy and protection</p>

    </div>
  );
};

export default index;
