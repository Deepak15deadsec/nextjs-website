import React from "react";
import Flag from "../../../../public/images/rainbow.png";

const Cardd = () => {
  return (
    <div className="rounded-[1rem] bg-[#2EB7F5]   p-6 space-y-5 w-full h-full">
      <div className="flex space-x-4 justify-center">
        <img
          src={Flag.src}
          alt="Sandeep Nailwal"
          className="w-[8.75rem] h-[6.5rem] object-contain"
        />
      </div>
      <div className="flex space-x-4 justify-center">

        <div className="space-y-[0.15rem] ">
          <p className="text-[2.1rem] font-sans font-[600] text-center  tracking-normal leading-[2rem] text-[#FFFFFF]">Pride in what we do</p>


        </div>
      </div>
      <div className="flex space-x-4 justify-center  ">
        <p className=" text-[.875rem] text-center font-sans font-[400]  tracking-normal leading-[1.5rem] text-[#FFFFFF]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};


export default Cardd;
