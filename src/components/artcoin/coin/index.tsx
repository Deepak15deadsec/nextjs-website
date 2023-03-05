import React from "react";
import Image from "next/image";
import Coin from "../../../../public/images/coin221.webp";
import shapes from '../../../../public/images/artcoin.svg'

const index = () => {

    return (

        <div className="bg-[#434343] pt-[15rem]  ">



            <div className="flex justify-between mb-[18rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-[60%] space-y-[5rem] pt-[5rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        ART – Making advertising benificial for everyone with the power of web3
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        $600 billion digital adverting industry is failing adverisers and users with privacy, transperency, and efficiency. 
                    </p>
                </div>

                <div className="space-y-[4rem]">
                    < Image
                        height={914}
                        width={700}
                        src={Coin.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    <div className=" pl-60">
                        <button className="rounded-[1rem] bg-[#01A4EF]  p-8 space-y-5 w-[13rem] h-[5rem]">
                            <p className="text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">White Paper</p>
                        </button>
                    </div>

                </div>


            </div>


            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#d41522] xl:px-[22rem] lg:px-[7rem] px-[3rem] ">
                <div className="w-[60%] space-y-[5rem] pt-[5rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        Advertising technology is broken
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        with Ad Fraud, Ad Blockers, Ad Overload, Lack of Transparency, and Data Privacy Concerns
                    </p>
                </div>
                <div>
                    < Image
                        height={814}
                        width={600}
                        src={shapes.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#2218de] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div>
                    < Image
                        height={814}
                        width={600}
                        src={shapes.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>

                <div className="w-[50%] space-y-[5rem] pt-[5rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        adopting changes for efficiency
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        bringing  targeted and personalized approach, prioritizing transparency and accountability, and respecting user privacy and consent
                    </p>
                </div>

            </div>


            {/* <div className="flex justify-between pt-[10rem] bg-[#c9f51b] pb-[10rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
            <div className="w-[60%] space-y-[5rem] pt-[5rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        Earn every time you spend
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        $600 billion digital adverting industry is failing users and advertisers.
                        with action reward token  and Avni we want to take crypto to next billion users to bring efficiency to digital ad industry
                    </p>
                </div>
                <div>
                    < Image
                        height={814}
                        width={600}
                        src={shapes.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>
            </div> */}

        </div>


    );
};

export default index;
