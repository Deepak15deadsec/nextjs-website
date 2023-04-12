import React from "react";
import Image from "next/image";
import Brain from "../../../../public/images/brain.png"

const index = () => {

    return (

        <div className= "bg-[#1dc5b7] py-[10rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">

            <div className="flex justify-between lg:px-[7rem]  py-5">
                <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">
                    
                    <p className="text-left  w-[60%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                    why the change?
                    </p>

                    <p className="text-left font-[500] w-[60%] mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                    digital advertising lags behind due to a tech first mentality
                    </p>

                    <p className=" font-[400]  w-[60%] lg:text-[2rem] lg:leading-[2rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                    ready to prioritise human experiences over unauthorised data usage and advetising frauds?</p>

                     

                   </div>

                <div className=" pt-12">
                    < Image
                        height={500}
                        width={500}
                        src={Brain.src}
                        alt="ambassador hero"
                        className="object-contain"
                    />
                    

                </div>


            </div>


          

        </div>


    );
};

export default index;
