import React from "react";
import Image from "next/image";
import Card from "./Card";
import BrandAmbassador from "../../../../public/images/brandambassador.png"



const index = () => {

    return (

        <div className= "bg-[#dd245c] py-[10rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem]">

            <div className="flex justify-between lg:px-[7rem] md:px-[7rem]  py-5">
                <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">
                    
                    <p className="text-left  w-[80%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                    if you are 
                    </p>

                    <p className="text-left font-[500] w-[60%] mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                    passionate about  web3 or advertising  and eager to make a positive impact
                    </p>

                    <p className=" font-[400]  w-[80%] lg:text-[2rem] lg:leading-[2.2rem] md:text-[2rem] md:leading-[2.2rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                    whether you're a natural leader, creative thinker, or simply love to share your experiences, become a college ambassador and help to shape the future of web3 and adveristing</p>

                     

                   </div>

                <div className="lg:flex md:flex hidden pt-12">
                    < Image
                        height={500}
                        width={500}
                        src={BrandAmbassador.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    

                </div>

                <div className="lg:hidden md:hidden flex ">
                    < Image
                        height={400}
                        width={400}
                        src={BrandAmbassador.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    

                </div>
            </div>        
        </div>


    );
};




/*
const index = () => {

    return (

        <div className="bg-[#F6DAE4] pt-[15rem]  pb-[15rem]">

            <div className="flex xl:px-[22rem] lg:px-[7rem] ">
                <div className="flex flex-col w-full justify-center space-y-[5rem] pt-[1rem] xl:px-[22rem]">

                    <p className="ml-[2.5rem] text-center font-[500] lg:text-[4.2rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#F14F20]">
                        Become an Ambassador
                    </p>

                    <p className="ml-[2rem] text-center font-[200] lg:text-[4rem] lg:leading-[0rem] md:text-[1rem] md:leading-[0rem] text-[#F14F20]">
                        Does This Describe You?
                    </p>

                    <div className="flex justify-center items-center">
                        <div className=" grid gap-x-5 gap-y-4 grid-cols-3">

                            <Card title="Enthusiast" />
                            <Card title="Community leader" />
                            <Card title="Marketer/ content creator" />
                            <Card title="Student" />
                            <Card title="Willing to start" />

                        </div>
                    </div>

                </div>

            </div>

        </div>


    );
};

*/

export default index;
