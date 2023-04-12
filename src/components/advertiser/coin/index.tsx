import React from "react";
import Image from "next/image";
import Grow from "../../../../public/images/Grow.png";
import shapes from '../../../../public/images/wrench.png';
import PPC from '../../../../public/images/ppc.png';
import Target from '../../../../public/images/target.png';
import Repeat from '../../../../public/images/repeat.png';
import Gift from '../../../../public/images/voucher.png'

const index = () => {

    return (

        <div className="bg-[#36454f] pt-[1rem]  ">

            <div className="flex justify-between pt-[10rem] pb-[10rem] space-x-[1rem] bg-[#30D792] xl:px-[22rem] lg:px-[14rem] px-[3rem] ">
                <div className="w-[60%] lg:space-y-[5rem] md:space-y-[5rem] space-y-[3rem]">
                    <p className="text-left font-[800] lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        grow your business
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                        upto 1000 transaction credits<br />you only pay for results not for clicks<br />it’s that simple!
                    </p>

                    <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
                        Get Started
                    </button>
                </div>


                <div className="lg:flex md:flex hidden pl-[3rem] pt-[3rem] ">
                    < Image
                        height={814}
                        width={600}
                        src={Grow.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>

                <div className="lg:hidden md:hidden flex pl-[3rem] pt-[0rem] ">
                    < Image
                        height={814}
                        width={600}
                        src={Grow.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>

            </div>




            <div className="flex justify-between py-[10rem]  bg-[#FF6000] xl:px-[22rem] lg:px-[14rem] px-[3rem] ">
                <div className="w-[60%] lg:space-y-[5rem] md:space-y-[5rem] space-y-[3rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        do not pay for clicks
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                        pay only when a customer purchases,<br /> and NOT for  clicks
                    </p>
                    <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
                        Get Started
                    </button>
                </div>
                <div className="lg:flex md:flex hidden  pt-[9rem]">
                    < Image
                        height={814}
                        width={600}
                        src={PPC.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
                <div className="lg:hidden md:hidden flex pt-[0rem] ">
                    < Image
                        height={614}
                        width={400}
                        src={PPC.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
            </div>


            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#AA77FF] xl:px-[22rem] lg:px-[14rem] px-[3rem] ">
                <div className="w-[60%] lg:space-y-[5rem] md:space-y-[5rem] space-y-[3rem]">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        fixing the broken advertising
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                        with personalisation, transparency, data privacy  and rewards <br />&nbsp;<br />&nbsp;<br />&nbsp;<br />
                    </p>
                </div>
                <div className="lg:flex md:flex hidden pt-[5rem]">
                    < Image
                        height={714}
                        width={500}
                        src={shapes.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
                <div className="lg:hidden md:hidden flex pt-[0rem] ">
                    < Image
                        height={514}
                        width={300}
                        src={shapes.src}
                        alt="broken advertising"
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-between pt-[9rem] pb-[0rem]  bg-[#F99417] xl:px-[22rem] lg:px-[14rem] px-[3rem]">


                <div className="w-[50%] lg:space-y-[5rem] md:space-y-[5rem] space-y-[3rem]">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        acquire new customers
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                        with hyper personalization, and targetting at lowest price
                    </p>

                    <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem]  text-[#333333] tracking-normal leading-[1.33rem]">
                        Get Started
                    </button>


                    <br /> &nbsp; <br />&nbsp; <br />&nbsp; <br />&nbsp; <br />&nbsp; <br />
                </div>

                <div className="lg:flex md:flex hidden pt-[3rem] ">
                    < Image
                        height={600}
                        width={600}
                        src={Target.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>

                <div className="lg:hidden md:hidden flex -pt-[3rem] ">
                    < Image
                        height={500}
                        width={500}
                        src={Target.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>

            </div>

            <div className="flex justify-between pt-[9rem] pb-[0rem] bg-[#84D2C5] xl:px-[22rem] lg:px-[14rem] px-[3rem]">


                <div className="w-[50%] lg:space-y-[5rem] md:space-y-[5rem] space-y-[3rem] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        increase repeat purchases
                    </p>

                    <p className="text-left font-[400]  lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                        with our unique milestone driven rewards, engage and increase number of purhcase per customer
                    </p>
                    <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
                        Get Started
                    </button>
                    <br /><br /><br />
                </div>

                <div className="lg:flex md:flex hidden pt-[3rem]">
                    < Image
                        height={600}
                        width={600}
                        src={Repeat.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>

                <div className="lg:hidden md:hidden flex -pt-[3rem] ">
                    < Image
                        height={500}
                        width={500}
                        src={Repeat.src}
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
