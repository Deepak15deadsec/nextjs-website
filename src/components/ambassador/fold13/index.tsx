import React from "react";
import Image from "next/image";
import Rewards from "../../../../public/images/rewards.png"

const index = () => {

    return (

        <div className="bg-[#800080] pt-[5rem]  ">

            <div className="flex mb-[5rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="justify-center w-[60%] space-y-[5rem] pt-[1rem] xl:px-[22rem]">
                    
                    <p className="ml-[2.5rem] text-left font-[300] pl-[12rem] pt-[10rem] lg:text-[3.5rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#FFFFFF]">
                    REWARDS SHOP
                    </p>

                    {/* <p className="ml-[2rem] text-left font-[200] pl-[10rem] lg:text-[6rem] lg:leading-[0rem] md:text-[1rem] md:leading-[0rem] text-[#FFFFFF]">
                    Access and earn rewards 24/7 via your Ambassador Dashboard.
                    </p> */}

                    <p className="ml-[1rem] text-left font-[100] lg:text-[2rem] lg:leading-[6rem] md:text-[1rem] md:leading-[1rem] text-[#FFFFFF]">
                    Access and earn rewards 24/7 via your Ambassador Dashboard.
                    </p> 

                    <div className=" pl-80">
                        <button className="rounded-[rem] bg-[#01A4EF]  p-8 space-y-5 w-[13rem] h-[5rem] ">
                            <p className="margin-right: 100px text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">Apply Now</p>
                        </button>
                        
                    </div>

                   </div>

                <div className="space-y-[4rem] pb-[5rem]">
                    < Image
                        height={914}
                        width={700}
                        src={Rewards.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    

                </div>


            </div>


          

        </div>


    );
};

export default index;
