import React from "react";
import Ratnesh from '../../../../public/images/pradeep-circle.png';
import Image from "next/image";

const Cardd = () => {
  return (
    <div className="rounded-[1.75rem] bg-[#FF6154] p-2 space-y-2">
      <div className="flex space-x-4 items-center justify-center ">
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

      <h3 className="text-[2.25rem]  font-[600] text-center leading-[3.5rem] text-[#FFFFFF]">Pradeep Vallat</h3>



      <p className=" text-[1.25rem]  font-[400] text-center  leading-[1.5rem] text-[#FFFFFF]">
        Co-founder & CEO
      </p>

    </div>
  );
};

export default Cardd;
