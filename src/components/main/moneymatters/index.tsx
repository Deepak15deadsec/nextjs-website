import React from "react";
import Image from "next/image";
import shapes from '../../../../public/images/deserve-more-bg.png'

const index = () => {

    return (

        <div className=" py-[18rem] xl:px-[22rem] mt-[-8rem] lg:px-[7rem] px-[3rem] bg-[url('/images/sky1.webp')] bg-cover bg-center">



            <div className="flex justify-left ">
                <div className="w-[85%]">
                    <p className="text-left font-[800] w-[60%] lg:text-[9rem] lg:leading-[9rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                     personal and exclusive offers
                    </p>
                    <p className="text-left font-[500] mt-[3rem] w-[40%] lg:text-[3.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        so that you don’t have to
                    </p>
                    <p className="text-left font-[400] w-[40%] xl:w-[40%] pt-[1rem] lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        hunt across the internet to find your favourate brand's offers and promotions.
                    </p>
                    <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-10 font-lettera-medium font-[700] px-[4rem] text-[2.5rem] text-[#333333] tracking-normal leading-[1.33rem]">
                        Experience it now
                    </button>
                </div>


            </div>

        </div>

    );
};

export default index;
