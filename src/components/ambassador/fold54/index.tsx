import React from "react";
import Image from "next/image";
import Card from "./Card";

const index = () => {

    return (

        <div className="bg-[#C8E7F5] pt-[15rem] pb-[15rem]">

            <div className="flex xl:px-[22rem] lg:px-[7rem] ">
                <div className="flex flex-col w-full justify-center space-y-[5rem] pt-[1rem] xl:px-[22rem]">

                    <p className="ml-[2.5rem] text-center font-[500] lg:text-[4.2rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#F14F20]">
                        What’s in it for you?
                    </p>

                    <p className="ml-[2rem] text-center font-[200] lg:text-[4rem] lg:leading-[0rem] md:text-[1rem] md:leading-[0rem] text-[#F14F20]">
                        Well, what not!
                    </p>

                    <div className="flex justify-center items-center">


                        <div className=" grid gap-x-8 gap-y-4 grid-cols-3">

                            <Card title="Some Real Rewards" />
                            <Card title="Exclusive & Early Access" />
                            <Card title="Perks & SWAGs" />
                            <Card title="Hands-on experience" />
                            <Card title="Community stewardship" />
                            <Card title="Exclusive NFT drops" />
                            <Card title="Get Hired with us!" />

                        </div>
                    </div>



                </div>




            </div>




        </div>


    );
};

export default index;
