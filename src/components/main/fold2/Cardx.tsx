import React from "react";
import Box from "../../../../public/images/reward.png";


const Cardx = ({title }:{title:string}) => {
  return (
    <div className="rounded-[3.5rem] bg-[url('/images/trust-bg.webp') border-8 border-red-400">

      
        <p className="text-[2.5rem] font-lettera-medium font-[600] tracking-normal leading-[3.5rem] text-[#ffffff]">{title}</p>



    </div>
  );
};

export default Cardx;