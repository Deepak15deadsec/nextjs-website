import React from "react";
import Image from "next/image";
import Coin from "../../../../public/images/coin221.webp";
import shapes from '../../../../public/images/artcoin.svg';
import Web3 from '../../../../public/images/web3.png';

const index = () => {

    return (

        <div className="bg-[#434343] pt-[15rem]  ">



            <div className="flex justify-between mb-[18rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-[60%] space-y-[5rem] pt-[5rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    Making advertising cost effective & beneficial for everyone
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#AAAAAA]">
                    The $600 Billion Digital Advertising Industry is failing advertisers & users with privacy, transparency and efficiency concerns!
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
                        Current advertising technology is broken!
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    With ad blockers, lack of transparency and data privacy concerns
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

            <div className="flex justify-between pt-[5rem] pb-[5rem] bg-[#2218de] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                

                <div className="w-[50%] space-y-[5rem] pt-[3rem]">
                    <p className="text-left font-[700] lg:text-[6rem] lg:leading-[6rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    Web3 for a CHANGE!
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    Introducing a targeted, transparent & pro-user approach, keeping user privacy and consent intact
                    </p>
                </div>

                <div className="pt-[0.5rem]"> 
                    < Image
                        height={700}
                        width={700}
                        src={Web3.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
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
