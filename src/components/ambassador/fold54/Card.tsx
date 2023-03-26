import React from "react";
import Box from "../../../../public/images/reward.png";


const Cardx = ({title1, title2 }:{title1:string,title2:string}) => {
  return (
    <div className="rounded-[1.75rem] bg-[#dea6a0] p-8 space-y-2 lg:w-[24rem] text-center">
       
        <p className="text-[2.5rem]  font-[600]  tracking-normal leading-[3.5rem] text-[#ffffff]">{title1}</p>

        <hr 
        style={{
          borderRadius: '50%',
          background: '#ffffff',
          color: '#ffffff',
          borderColor: '#ffffff',
          height: '4px',
          }}></hr>

        <p className="pt-[2rem] text-[1.8rem]  font-[400]  tracking-normal leading-[3rem] text-[#434343]">
          {title2}
        </p>  
    </div>
  );
};

export default Cardx;