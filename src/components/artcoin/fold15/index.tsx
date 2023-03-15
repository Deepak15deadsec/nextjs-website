import React from "react";
import Logo from '../../../../public/images/google.svg';
import Create from '../../../../public/images/creator.png'
import User from '../../../../public/images/wallet.png'
import Linechart from '../../../../public/images/process.png'
import GreenCard from "../../GreenCard"
import { Card } from "./Card";

const index = () => {
  return (
    <div className="w-full bg-[#F5F5F5]">


      <div className="bg-[#F5F5F5] mt-[0rem]  flex flex-col justify-center items-center md:px-[2rem] lg:px-[4rem] px-[4rem]">
        <p className="text-[3.75rem] mt-[6rem] font-sans font-[600] text-center tracking-normal leading-[5rem] text-[#67DF87]">First ever Crypto app with {'>'} 1 million users</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-x-6 mt-[3rem] mb-[1rem]">
          <Card img={Linechart.src} title="On-chain Transactions" number="3.9M"/>
          <Card img={User.src} title="Wallet Count" number="10.6M"/>
          <Card img={Create.src} title="Number of Creators" number="1.7M"/>
         

        </div>

      </div>

      


    </div>
  );
};

export default index;
