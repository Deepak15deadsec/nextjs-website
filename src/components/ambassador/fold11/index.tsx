import React from "react";
import Image from "next/image";
import Ambassador from "../../../../public/images/ambassador.png"

const index = () => {

    return (

        <div className="bg-[#434343] pt-[15rem]  ">

            <div className="flex justify-between mb-[18rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-[60%] space-y-[5rem] pt-[5rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        Join the AVNI Brand Ambassador family and get featured here.
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    Converting loyal customers into brand ambassadors
                    </p>
                </div>

                <div className="space-y-[4rem]">
                    < Image
                        height={914}
                        width={700}
                        src={Ambassador.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    <div className=" pl-60">
                        <button className="rounded-[rem] bg-[#01A4EF]  p-8 space-y-5 w-[13rem] h-[5rem]">
                            <p className="text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">Get Featured</p>
                        </button>
                    </div>

                </div>


            </div>


          

        </div>


    );
};

export default index;
