import React from "react";
import Image from "next/image";
import Coin from "../../../../public/images/ART-Nikel.png";
import shapes from '../../../../public/images/wrench.png';
import Web3 from '../../../../public/images/web3.png';
import Freedom from '../../../../public/images/freedom.png';
import Marketing from '../../../../public/images/marketing.png';
import Gift from '../../../../public/images/voucher.png'

const index = () => {

    return (

        <div className="bg-[#36454f] pt-[15rem]  ">



            <div className="lg:flex md:flex hidden justify-between mb-[18rem] xl:px-[22rem] lg:px-[14rem] px-[3rem]">

                <div className="w-[60%] space-y-[5rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        get action reward token throughout your day
                    </p>

                    <p className="text-left font-[500] mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] text-[#FFFFFF]">

                    </p>
                </div>

                <div className="mt-[6rem]">
                    < Image
                        height={800}
                        width={800}
                        src={Coin.src}
                        alt="ART"
                        className="object-contain pl-40"
                    />
                    <div className=" pl-60">
                        <p className="text-left font-[500]  lg:text-[1.4rem] lg:leading-[2rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] text-[#FFFFFF]">
                            <br />all collected tokens will be airdropped after the token generation event in mid august 2023
                        </p>
                        <button className="rounded-[1rem] bg-[#30D792] mt-[1.5rem] p-8 space-y-5 w-[13rem] h-[5rem]">
                            <p className="text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">lite paper</p>
                        </button>
                    </div>

                </div>


            </div>


            <div className="lg:hidden md:hidden flex flex-col justify-center mb-[18rem] xl:px-[22rem] lg:px-[14rem] px-[3rem]">

                <div className="w-[60%] space-y-[5rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        get action reward token throughout your day
                    </p>

                    <p className="text-left font-[500] mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] text-[#FFFFFF]">

                    </p>
                </div>

                <div className="">
                    < Image
                        height={800}
                        width={800}
                        src={Coin.src}
                        alt="ART"
                        className="object-contain "
                    />
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-center font-[500]  lg:text-[1.4rem] lg:leading-[2rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] text-[#FFFFFF]">
                            <br />all collected tokens will be airdropped after the token generation event in mid august 2023
                        </p>
                        <button className="rounded-[1rem] bg-[#30D792] mt-[1.5rem] p-8 space-y-5 w-[13rem] h-[5rem]">
                            <p className="text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">lite paper</p>
                        </button>
                    </div>

                </div>


            </div>


            <div className="flex justify-between pt-[10rem] pb-[10rem] space-x-[1rem] bg-[#00d64f] xl:px-[22rem] lg:px-[14rem] px-[3rem] ">
                <div className="w-[60%] space-y-[5rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        collect, redeem and <br />repeat
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        you can redeem your tokens for<br />free gift cards and enjoy.<br />it’s that simple!
                    </p>
                </div>
                <div className="pt-[3rem] ">
                    < Image
                        height={814}
                        width={600}
                        src={Gift.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
            </div>




            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#0169ff] xl:px-[22rem] lg:px-[14rem] px-[3rem] ">
                <div className="w-[60%] space-y-[5rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        shop with ease and earn with ease
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        with revolutionary action reward token for shopping, where every purchase you move one step closer to financial freedom and digital empowerment
                    </p>
                </div>
                <div className="pt-[9rem]">
                    < Image
                        height={814}
                        width={600}
                        src={Freedom.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
            </div>





            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#ff4d00] xl:px-[22rem] lg:px-[14rem] px-[3rem] ">
                <div className="w-[60%] space-y-[5rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        fixing the broken advertising
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        with personalisation, transparency, data privacy  and rewards <br />&nbsp;<br />&nbsp;<br />&nbsp;<br />
                    </p>
                </div>
                <div className="pt-[5rem]">
                    < Image
                        height={714}
                        width={500}
                        src={shapes.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-between pt-[9rem] pb-[0rem] bg-[#0169ff] xl:px-[22rem] lg:px-[14rem] px-[3rem]">


                <div className="w-[50%] space-y-[5rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        action reward platform
                    </p>


                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        building genuine connection between customers and their brands,
                        built on trust, value,  shared experiences and privacy <br /> &nbsp; <br />&nbsp; <br />&nbsp; <br />&nbsp; <br />&nbsp; <br />
                    </p>


                </div>

                <div className="pt-[3rem]">
                    < Image
                        height={600}
                        width={600}
                        src={Marketing.src}
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
