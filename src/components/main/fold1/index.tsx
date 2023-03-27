import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import JoinModal from "../../JoinModal";


const index = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#434343] py-[13rem] flex flex-col justify-center items-center xl:px-[22rem] lg:px-[12rem] md:px-[10rem] px-[8rem]  space-y-7">
    

      <p className="text-center font-[800] lg:text-[10rem] lg:leading-[10.5rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
        Rewards for<br />proof of shopping
      </p>

      <p className="text-center font-[500] pt-[1rem] lg:text-[3.8rem] lg:leading-[4.2rem] md:text-[2.2rem] md:leading-[2.5rem] leading-[1.8rem] text-[1.5rem] text-[#FFFFFF]">
        Earn crypto rewards for every shopping receipt with personalized brand offers
      </p>

      <p className="lg:pt-[3rem] md:pt-[3rem] pt-[0rem] pb-[1rem] lg:text-[1.75rem] text-center md:text-[1.5rem] text-[0.8rem] font-Open-Sans font-[400] tracking-normal leading-[2.5rem]   text-[#57CC99]">Join 10K+ members of our pre-launch program to earn exciting rewards and offers from your favorite brands</p>

      {
        isOpen==false && (<button
          onClick={() => setIsOpen(true)}
          className="bg-white z-[999] rounded-[3.2rem] px-8 py-4 font-lettera-medium font-[700]  lg:text-[2.5rem]  text-[#333333]"
        >
          Join now
        </button>)
      }

      <JoinModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        
      />
      {/* <button
        onClick={google}
        className="h-[4rem]  flex justify-center items-center text-white shadow-lg  font-[400] text-[1.5rem]  leading-[3rem]"
      >
        <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
          <FcGoogle size={50} />
        </div>
        <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
          <p>Sign in with Google</p>
        </div>
      </button> */}

    </div >






  );
};

export default index;
