import React from "react";
import Box from "../../../../public/images/reward.png";


const Cardx = ({title }:{title:string}) => {
  return (
    <div className="rounded-[1.75rem] bg-[#FFFFFF] p-8 space-y-2 lg:w-[22rem]">
       
        <p className="text-[2.5rem]  font-[600]  tracking-normal leading-[3.5rem] text-[#F14F20]">{title}</p>

        

    </div>
  );
};

export default Cardx;