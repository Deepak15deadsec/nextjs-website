import React from "react";
import Box from "../../../../public/images/reward.png";


const Cardx = ({title1, title2 }:{title1:string,title2:string}) => {
  return (
    <div className="rounded-[1.75rem]  px-[1.5rem] space-y-2 space-x-3 lg:w-[60rem]  text-left">
       
        <p className="text-[2rem]  font-[600] pl-[1rem] tracking-normal leading-[2.2rem] text-[#ffffff]">{title1}</p>

        <hr 
        style={{
          borderRadius: '50%',
          background: '#ffffff',
          color: '#ffffff',
          borderColor: '#ffffff',
          height: '4px',
          width: '180px'
          }}></hr>

        <p className=" text-[1.4rem]  font-[400] text-left tracking-normal pb-[2rem] leading-[2rem] text-[#ffffff]">
          {title2}
        </p>  
    </div>
  );
};

export default Cardx;