import React from "react";
import Image from "next/image";
import shapes from '../../../../public/images/deserve-more-bg.png'
import { useRouter } from "next/router";
import { useState } from "react";
import JoinModal from "../../JoinModal";

const index = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)
  return (

    <div className=" py-[18rem] xl:px-[22rem] mt-[-8rem] lg:px-[14rem] px-[3rem] bg-[url('/images/sky-min.webp')] bg-cover bg-center">



      <div className="flex justify-left ">
        <div className="w-[85%]">
          <p className="text-left font-[800] w-[60%] lg:text-[9rem] lg:leading-[9rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            happy shopping
          </p>
          <p className="text-left font-[400] mt-[3rem] w-[40%] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[3rem] text-[1.5rem] leading-[1.5rem] text-[#FFFFFF]">
            no more hunt for offers & coupons  all brand offers & promotions are at one place
          </p>
          <p className="text-left font-[400] w-[40%] xl:w-[40%] pt-[1rem] lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">

          </p>
          {/* <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-10 font-lettera-medium font-[700] px-[4rem] text-[2.5rem] text-[#333333] tracking-normal leading-[1.33rem]">
                    Experience it now
                    </button> */}
          <div className="pt-[3rem]">
            {/* {
              isOpen == false && (<button
                onClick={() => setIsOpen(true)}
                className="bg-white z-[999] rounded-[3.2rem] px-5 py-3 font-lettera-medium font-[700]  lg:text-[2rem]  text-[#333333]"
              >
                Experience now
              </button>)
            } */}

            <JoinModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}

            >
              <button className="bg-white z-[999] rounded-[3.2rem] px-5 py-3 font-lettera-medium font-[700]  lg:text-[2rem]  text-[#333333]">
                Experience now
              </button>
            </JoinModal>
          </div>

        </div>
      </div>

    </div>

  );
};

export default index;
