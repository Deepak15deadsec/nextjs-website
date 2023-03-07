import React from "react";
import Image from "next/image";
import Crew from "../../../../public/images/crew.png"

const index = () => {

    return (

        <div className="bg-[#b82e8a] pt-[3rem] ">

            <div className="flex mb-[5rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="justify-center w-[60%] space-y-[5rem] pt-[1rem] xl:px-[22rem]">
                    
                    <p className="ml-[2rem] text-left font-[300] pl-[13rem] pt-[10rem] lg:text-[2.5rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#FFFFFF]">
                    WE WANT YOU IN THE
                    </p>

                    <p className="ml-[2rem] text-left font-[400] pl-[8rem] lg:text-[6rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#FFFFFF]">
                    #AVNICREW
                    </p>

                    <p className="text-center pr-40 font-[100] lg:text-[1.5rem] lg:leading-[4rem] md:text-[1rem] md:leading-[1rem] text-[#FFFFFF]">
                    Love Avni? We're on the hunt for Brand Ambassadors of all follower sizes to help spread <br/> the word.
                    </p> 

                    <div className=" pl-80">
                        <button className="rounded-[rem] bg-[#01A4EF]  p-8 space-y-5 w-[15rem] h-[5rem] ">
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
