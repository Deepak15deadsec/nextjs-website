import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import JoinModal from "../../JoinModal";
import JoinMobile from "../../JoinMobile";


const index = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#36454f] py-[13rem] flex flex-col justify-center items-center xl:px-[22rem] lg:px-[12rem] md:px-[10rem] px-[4rem]  space-y-7">


      <p className="text-center font-[800] lg:text-[8rem] lg:leading-[10.5rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
        rewards for<br />proof of shopping
      </p>

      <p className="text-center font-[500] pt-[1rem] lg:text-[2rem] lg:leading-[4.2rem] md:text-[2rem] md:leading-[2.5rem] leading-[1.8rem] text-[1.5rem] text-[#FFFFFF]">
        tokens, digital collectibles, exclusive offers, coupons & cashbacks <br /><br /><br />
      </p>

      <div className="lg:flex md:flex hidden">
        <JoinModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

        >
          <button className="bg-white  rounded-[3.2rem] px-8 py-4 font-lettera-medium font-[700]  lg:text-[2.5rem]  text-[#333333]">
            Join now
          </button>
        </JoinModal>
      </div>

      <div className="lg:hidden md:hidden flex">
        <JoinMobile
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

        >
          <button className="bg-white  rounded-[3.2rem] px-8 py-4 font-lettera-medium font-[700]  lg:text-[2.5rem]  text-[#333333]">
            Join now
          </button>
        </JoinMobile>
      </div>



      <p className="lg:pt-[3rem] md:pt-[3rem] pt-[0rem] pb-[1rem] lg:text-[1.75rem] text-center md:text-[1.5rem] text-[0.8rem] font-Open-Sans font-[400] tracking-normal leading-[1.5rem]   text-[#57CC99]">   2k+ members have already reserved their seats in the pre-launch program </p>


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
