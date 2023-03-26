import React from "react";
import Image from "next/image";
import Card from "./Card";

const index = () => {
    const openInNewTab = (url: string | URL | undefined) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
<div className="bg-[#ffffff] justify-center flex flex-col items-center space-y-5">
        <div className="bg-[#ee6c5c] w-full pt-[8rem] pb-[8rem]">

            
                <div className="flex flex-col w-full justify-center space-y-[5rem] pt-[1rem] ">

                    <p className="ml-[2.5rem] text-center font-[500] lg:text-[4.2rem] lg:leading-[0rem] md:text-[2rem] md:leading-[0rem] text-[#ffffff]">
                        What’s in it for you?
                    </p>

                   
                    <div className="flex justify-center items-center">


                        <div className=" grid gap-x-8 gap-y-4 grid-cols-3">

                            <Card title1="Work with avni " title2="Be the face of avni & explore the world of web3 ad-tech with us with an opportunity to get hired "/>
                            <Card title1="Get $ART tokens" title2="Be ahead of many & own $ART tokens as you get rewarded for executing tasks & responsibilities" />
                            <Card title1="Get rewarded" title2="Collect cool merch alongside early bird access to our products & offerings"/>
                            

                        </div>
                    </div>



                </div>

            

        </div>
        <div className="space-y-6 ">
        <button onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdRCS1T45mEvvgbY_-j0esPbXM4F-_AG_z7CgDlzYST_9Wwdw/viewform?usp=pp_url&entry.407278199=https://')} className="rounded-[2rem] bg-[#ffffff]  p-8 space-y-5 ">
                    <p className="bg-[#ee6c5c] text-[2rem] font-[500] rounded-[3.5rem]  px-[5rem] py-[2rem] space-y-5  text-[#434343]">Become an ambassador</p>
                </button>
                <div/>
                </div>
                </div>
    );
};

export default index;
