import React from "react";
import Image from "next/image";
import Crew from "../../../../public/images/crew.png"

const index = () => {

    return (

        <div className="bg-[#b82e8a] pt-[3rem] ">

            <div className="flex  xl:px-[22rem] pb-[5rem] lg:px-[7rem] px-[3rem]">
                <div className="justify-center items-center w-[60%] space-y-[5rem] pt-[1rem] xl:px-[22rem]">
                    
                    <p className=" text-center font-[300]  pt-[12rem] lg:text-[2.5rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#FFFFFF]">
                    WE WANT YOU IN THE
                    </p>

                    <p className=" text-center font-[400] lg:text-[6rem] lg:leading-[2rem] md:text-[2rem] md:leading-[2rem] text-[#FFFFFF]">
                    #AVNICREW
                    </p>

                    <p className="text-center pl-[3rem] w-[90%] font-[100] lg:text-[1.5rem] lg:leading-[1.5rem] md:text-[1rem] md:leading-[1rem] text-[#FFFFFF]">
                    Love Avni? We're on the hunt for Brand Ambassadors of all follower sizes to help spread the word.
                    </p> 

                    <div className="pl-[22rem] ">
                        <button className="rounded-[1rem] bg-[#01A4EF]  p-8 space-y-5 w-[15rem] h-[5rem] ">
                            <p className="margin-right: 100px text-[1.5rem] font-Open-Sans font-[500] tracking-normal leading-[1rem] text-[#FFFFFF]">Apply Now</p>
                        </button>
                        
                    </div>

                   </div>

                <div className="space-y-[4rem] pb-[3rem] pr-[3rem]">
                    < Image
                        height={400}
                        width={500}
                        src={Crew.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    

                </div>


            </div>


          

        </div>


    );
};

export default index;
