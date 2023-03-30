import React from "react";
import Image from "next/image";
import Web3 from '../../../../public/images/web3.png';


const index = () => {

    return (
        <div className="flex justify-between pt-[4rem] pb-[16rem] bg-[url('/images/trust-bg.webp')] xl:px-[22rem] lg:px-[7rem] px-[3rem]">


            <div className="">
                < Image
                    height={700}
                    width={700}
                    src="/images/greencurve.png"
                    alt="Avni Hero"
                    className="object-contain"
                />
            </div>

            <div className="w-[50%]  pt-[3rem]">
                <p className="text-right font-[800] lg:mt-[3rem] md:mt-[15rem] mt-[38rem] xl:text-[9em] lg:text-[9rem] lg:leading-[8.5rem] xl:leading-[8.5rem] md:text-[4rem] md:leading-[4.2rem] text-[2rem] text-[#FFFFFF]">
                    every action is now rewarding
                </p>

                <p className="text-right font-[500] mt-[2rem] md:mt-[4rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2.5rem] text-[#FFFFFF]">
                    Sounds too good to be true?

                </p>
                <p className="text-right font-[400] md:pt-[4rem] pt-[1rem] lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[1.2rem] md:leading-[1.8rem] text-[#FFFFFF]">
                    We bring brand offers truly personalized! <br /> Every time you accept one, we share a portion of advertising revenue as $ART token.
                </p>
            </div>


        </div>
    );
};

export default index;
