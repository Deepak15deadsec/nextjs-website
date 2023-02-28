import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

const PopUpModal = ({children}:any) => {
  return (
    <div className="w-full h-[3.25rem] bg-[#4BA173] flex justify-center items-center space-x-[2rem] px-[1rem] lg:px-[10rem]">
          <p className="text-left font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1.33rem]">
            {children}
          </p>
          
        </div>
  )
}

export default PopUpModal