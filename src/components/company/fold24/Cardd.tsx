import React from "react";
import Ratnesh from '../../../../public/images/pradeep-circle.png';
import Image from "next/image";
import Comma from '../../../../public/images/comma.svg'

const Cardd = () => {
  return (
    <div className=" bg-[#FF6154]">
      <div className="w-full flex justify-between ">
        <div className="px-[8rem]  w-1/2 mb-[4rem] mt-[5rem]">
          <div className="flex justify-start pl-[2.1rem]">
            <div className="rounded-[6rem] shadow-[0_0px_20px_10px_rgba(0.8,0.8,0.8,0.2)]">
              <Image
                src={Ratnesh.src}
                alt="Sandeep Nailwal"
                height={192}
                width={192}
                className="object-contain"
              />

            </div>
          </div>

          <div className="justify-left items-left text-[2.25rem] pl-[1.1rem] font-[600] leading-[3.5rem] text-[#FFFFFF]">Pradeep Vallat</div>



          <div className="text-[1.25rem] pl-[2.5rem] font-[400] leading-[1.5rem] text-[#FFFFFF]">
            Co-founder & CEO
          </div>
        </div>

        <div className="w-full justify-center mt-[5rem]">
          <img
            src={Comma.src}
            alt="Fortune"
            height="30px"
            width="30px"
            className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
          />
          <div className="justify-left items-left text-[1.25rem] pt-[1rem] font-[500] leading-[2.5rem] text-[#d2d0d6]">Advertising in the coming days world will be less about interrupting audiences and more about engaging with communities. It will require a shift from centralized control to decentralized collaboration, where brands earn trust by delivering authentic, value-driven experiences and empowering consumers to co-create the narrative of their brand story</div>
        </div>

      </div>
    </div>
  );
};

export default Cardd;
