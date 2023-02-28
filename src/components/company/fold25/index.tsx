import React from "react";

import Logo from '../../../../public/images/google.svg';
import Comma from '../../../../public/images/comma.svg'
import Person from '../../../../public/images/lperson.svg'
import Left from '../../../../public/images/lefta.svg'
import Right from '../../../../public/images/righta.svg'
import GreenCard from "../../GreenCard"

const index = () => {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="bg-[#F5F5F5] mt-[0rem]  flex flex-col justify-center items-center px-[1rem]">
        <p className="text-[3.75rem] mt-[6rem] font-sans font-[600] text-center tracking-normal leading-[4rem] text-[#333333]">Hear from our Team</p>


        <div className="my-[2rem] w-full xl:px-[22rem] lg:px-[8rem] md:px-[8rem] px-[3rem] flex justify-between ">
          <div className="space-y-[2rem] w-3/4 mb-[4rem] mt-[5rem]">

            <div className="flex justify-start  items-center ml-[4rem] mt-[0rem]">
              <img
                src={Person.src}
                alt="Fortune"
                height="464px"
                width="464px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />

            </div>



          </div>
          <div className="space-y-[1rem] w-3/4 justify-center mt-[4rem]">

            <img
              src={Comma.src}
              alt="Fortune"
              height="66px"
              width="76px"
              className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
            />

            <p className="text-[1.875rem] mt-[3rem] font-sans font-[400] text-left tracking-normal leading-[2.5rem] text-[#333333]">“Advertising in the coming days world will be less about interrupting audiences and more about engaging with communities. It will require a shift from centralized control to decentralized collaboration, where brands earn trust by delivering authentic, value-driven experiences and empowering consumers to co-create the narrative of their brand story.”</p>
            <p className="text-[1.5rem] mt-[3rem] font-sans font-[400] text-left tracking-normal leading-[2rem] text-[#333333]">Griffin Dore, CEO</p>

            <div className="flex space-x-5">
              <img
                src={Left.src}
                alt="Fortune"
                height="40px"
                width="40px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />
              <img
                src={Right.src}
                alt="Fortune"
                height="40px"
                width="40px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />
            </div>
          </div>
        </div>

      </div>


     
      <GreenCard src={Logo.src} content={<p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">Sound too good to be true? Here’s the deal: Stores wants you to transact at their stores via <br /> offers and promotions we provide. we use the advertising revenue as Cash Back in Token.<br /> Everyone wins</p>} />

      

    </div>
  );
};

export default index;
