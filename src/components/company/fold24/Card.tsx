import React from "react";
import Ratnesh from '../../../../public/images/martin-circle.png';
import Image from "next/image";
import Comma from '../../../../public/images/comma.svg'

const Card = () => {
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

          <div className="justify-left items-left text-[2rem]  font-[600] leading-[2rem] text-[#FFFFFF]">martin Zielinski</div>



          <div className="text-[1.25rem] pl-[2.4rem] font-[400] leading-[1.5rem] text-[#FFFFFF]">
            co-founder & CMO
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
          <div className="justify-left items-left text-[1.25rem] pt-[1rem] font-[500] leading-[2.5rem] text-[#d2d0d6]">gone are the days of opaque ad networks and middlemen taking a cut at every turn. With decentralization, we can empower advertisers and publishers to connect directly, with full control and visibility over their campaigns. and with the rise of privacy concerns and ad-blocking, decentralized advertising offers a way to put the power back in the hands of the user, allowing them to control their data and monetize their attention</div>
        </div>

      </div>
    </div>
  );
};
export default Card;
