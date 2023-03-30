import React from "react";
import Image from "next/image";
import Card from "./Card";
import Expect from "../../../../public/images/expectation.png"

const index = () => {
    const openInNewTab = (url: string | URL | undefined) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (

        <div className="bg-[#681dea] py-[10rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem]">

            <div className="flex justify-between lg:px-[7rem] px-[3rem] py-5">
                <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">

                    <p className="text-left  w-[80%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        what to expect
                    </p>

                    <div className="flex justify-start items-left">


                        <div className=" grid gap-x-8  grid-cols-1">

                            <Card title1="priority " title2="allows you to get early access to avni products, exclusive offers from avni, and select brands" />
                            <Card title1="attend events" title2="event passes to web3 and advertising events" />
                            <Card title1="rewards" title2="additional reward tokens, exclusive ambassador NFT's" />
                            <Card title1="training" title2="training from industry leaders in web3, blockchain and digital marketing" />
                            <Card title1="win" title2="cool and exclusive merchandise on regular participation" />
                            <Card title1="employment" title2="opportunity for internship and full time employment" />

                        </div>



                    </div>

                    <button onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdRCS1T45mEvvgbY_-j0esPbXM4F-_AG_z7CgDlzYST_9Wwdw/viewform?usp=pp_url&entry.407278199=https://')} className="rounded-[2rem] bg-[#ffffff] w-[30%]  p-8 space-y-5 ">
                        <p className="text-[1.5rem] font-[500]  tracking-normal leading-[1.5rem] text-[#333333]">Become an ambassador</p>
                    </button>

                </div>

                <div className=" pt-[5rem]">
                    < Image
                        height={500}
                        width={500}
                        src={Expect.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />


                </div>
            </div>
        </div>





        /*

<div className="bg-[#ffffff] justify-center flex flex-col items-center space-y-5">
        <div className="bg-[#ee6c5c]  w-full pt-[8rem] pb-[8rem]">
        "flex flex-col text-left  space-y-[3rem] "

            
                <div className="flex flex-col w-full justify-center space-y-[5rem] pt-[1rem] ">

                    <p className="text-left  w-[80%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
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
                    <p className="bg-[#ee6c5c] text-[2rem] font-[500] rounded-[3.5rem]  px-[5rem] py-[2rem] space-y-5  text-[#ffffff]">Become an ambassador</p>
                </button>
                <div/>
                </div>
                </div>
                */
    );
};

export default index;
