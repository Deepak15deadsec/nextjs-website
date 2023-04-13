import React, { useState } from "react";
import PopupModal from "../../../components/popup/PopupModal";
import JoinModal from "../../JoinModal";


const index = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#36454f] py-[13rem] flex flex-col justify-center items-center xl:px-[22rem] lg:px-[12rem] md:px-[10rem] px-[3rem]  space-y-7">
      <p className="text-center font-[800] lg:text-[8rem] lg:leading-[10.5rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
        mission to become ​favorite rewards platform that people love
      </p>

      <p className="text-center font-[500] w-[80%] pt-[1rem] lg:text-[2.0 rem] lg:leading-[4.2rem] md:text-[2.2rem] md:leading-[2.5rem] leading-[1.8rem] text-[1.5rem] text-[#FFFFFF]">fun and easy way to collect tokens, digital collectibles(NFTs), offers and  gift cards for everyday shopping</p>

      {
        isOpen == false && (<button
          onClick={() => setIsOpen(true)}
          className="rounded-[1rem]  bg-[#01A4EF] mt-[3rem] p-3 space-y-5 w-[10rem] h-[5rem]">
          <p className="text-[1.5rem]  font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]">Join Now</p>
        </button>)
      }

      <JoinModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}

      />

    </div>
  );
};

export default index;
