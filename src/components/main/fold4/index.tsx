import React from "react";
// import Card from "../../../components/cards";
import Card from './Card'
import Cardd from './Cardd'
import Carddd from './Carddd'
import Cardddd from './Cardddd'



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
  {
    title: "Opt-in Reward",
    content: <span>Claim co-branded <br /> Ledger Nano S with $ART</span>,
    url: "https://cdn.juno.finance/juno-main-landing/ledger-nano.png",
  },
];

const Fold4 = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mt-[-2rem]  w-full mb-[4rem]  ">
        <div className="flex justify-between ">
          <div className="space-y-[1.5rem] xl:pl-[15rem] lg:ml-[7rem] md:ml-[2rem] ml-[1.5rem]">

            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[3rem] mb-[4rem]">
              <Card />
              <Cardd />
              <Carddd />
              <Cardddd />

            </div>

            {/* <div className="flex justify-start space-x-[1rem] items-center mt-[0rem]">
              <img
                src={RR.src}
                alt="Fortune"
                height="300px"
                width="376px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />

              <img
                src={SR.src}
                alt="Fortune"
                height="300px"
                width="376px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />

            </div>
            <div className="flex justify-start space-x-[1rem] items-center mt-[0rem]">
              <img
                src={RRR.src}
                alt="Fortune"
                height="300px"
                width="376px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />

              <img
                src={RRR.src}
                alt="Fortune"
                height="300px"
                width="376px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />

            </div> */}

          </div>
          <div className="space-y-[1.5rem]  w-2/5 mt-[2rem] bg-[url('/images/bg-logo.svg')] bg-cover">
            <p className="font-Open-Sans text-[#FFB703] text-right font-[700] mt-[14rem] xl:mr-[15rem] lg:mr-[7rem] md:mr-[2rem] mr-[1.5rem] text-[3rem] lg:text-[5rem] tracking-normal lg:leading-[5.86rem] leading-[3rem]">
              Earn from  your  data
            </p>
            <p className="font-Open-Sans text-[#333333] font-[400] text-[1.2rem] lg:text-[2rem] xl:mr-[15rem] lg:mr-[7rem] md:mr-[2rem] mr-[1.5rem]  text-right tracking-normal lg:leading-[3rem] leading-[2rem] ">
              Large corporations using your data and advertising to you. and they are generating billion of dollers from using you and your data.
            </p>

            {/* <button className="bg-blue-500 rounded p-3.5 font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1.33rem]">
              Learn More
            </button> */}
          </div>
        </div>

        {/* <div className="mt-[5rem] ">

          <div className="bg-[#01A4EF] pl-[10rem] pt-[50rem] space-y-[2rem] clip-path-polygon-[75%_0,_100%_32%,_100%_100%,_0%_100%,_0_29%,_25%_0]">
            <div className="mt-[-42rem]">
              <p className="text-[4rem] font-lettera-bold font-[700] text-center leading-[4rem] text-white">Rewarding that’s built for you</p>

              <div className="grid xs:grid-cols-1 grid-cols-2 gap-3 items-center mt-[3rem]">
                <Card />
                <Cardd />
                
              </div>

            </div>

          </div>

        </div> */}


      </div>
    </div>
  );
};

export default Fold4;
