import React from "react";
import Link from "next/link";
import Card from './Card'
import Cardd from './Cardd'
import Martin from '../../../../public/images/martin-circle.png';
import Pradeep from '../../../../public/images/pradeep-circle.png';
import Cardx from "./Cardx";

const index = () => {

    return (

        <div className="bg-[#FF6154] py-[15rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">

            <div className="lg:flex md:flex hidden justify-between lg:px-[7rem] px-[3rem] py-5">
                <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">

                    <p className="text-left  w-[60%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        team           </p>
                    <p className="text-left  w-[80%] font-[800]  lg:text-[2.8rem] lg:leading-[3rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        a gamut of engineers & product thinkers  driven by the passion to create a better transperant advertising platform  </p>





                </div>

                <div className="justify-right items-right w-[50%]">

                    <div className=" grid gap-x-8  grid-cols-1">

                        <Cardx img={Pradeep.src} title0="Pradeep Vallat" title1="Co-founder & CEO" title2="advertising in the coming days world will be less about interrupting audiences and more about engaging with communities. It will require a shift from centralized control to decentralized collaboration, where brands earn trust by delivering authentic, value-driven experiences and empowering consumers to co-create the narrative of their brand story " />
                        <Cardx img={Martin.src} title0="Martin Zielinski" title1="Co-founder & CMO" title2="gone are the days of opaque ad networks and middlemen taking a cut at every turn. With decentralization, we can empower advertisers and publishers to connect directly, with full control and visibility over their campaigns. and with the rise of privacy concerns and ad-blocking, decentralized advertising offers a way to put the power back in the hands of the user, allowing them to control their data and monetize their attention " />

                    </div>


                </div>



            </div>

            <div className="lg:hidden md:hidden flex flex-col justify-center  py-5">
                <div className="flex flex-col text-center  space-y-[3rem] ">

                    <p className="text-center   font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[10rem] md:leading-[10rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        team           </p>
                    <p className="text-left w-[90%]  font-[800]  lg:text-[2.8rem] lg:leading-[3rem] md:text-[2.8rem] md:leading-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
                        a gamut of engineers & product thinkers  driven by the passion to create a better transparent advertising platform  </p>


                </div>

                <div className="justify-center pt-[2rem] items-center ">

                    <div className=" grid gap-x-8  grid-cols-1">

                        <Card img={Pradeep.src} title0="Pradeep Vallat" title1="Co-founder & CEO" title2="advertising in the coming days will be less about interrupting audiences and more about engaging with communities. It will require a shift from centralized control to decentralized collaboration, where brands earn trust by delivering authentic, value-driven experiences and empowering consumers to co-create the narrative of their brand story " />
                        <Card img={Martin.src} title0="Martin Zielinski" title1="Co-founder & CMO" title2="gone are the days of opaque ad networks and middlemen taking a cut at every turn. With decentralization, we can empower advertisers and publishers to connect directly, with full control and visibility over their campaigns. and with the rise of privacy concerns and ad-blocking, decentralized advertising offers a way to put the power back in the hands of the user, allowing them to control their data and monetize their attention " />

                    </div>


                </div>



            </div>
        </div>






        /*
        
                <div className="bg-[#FF6154] flex flex-col justify-left items-left pb-[5rem] lg:px-[7rem] px-[3rem]">
                    <p className="text-[3rem] mt-[6rem] font-sans font-[500] text-left tracking-normal pb-10 leading-[3.5rem] text-white">A gamut of engineers & product thinkers<br></br> driven by the opportunity to create fairer financial systems</p>
        
                    <div className="justify-start">
        
                        <Cardd />
                        <Card />
        
        
                    </div>
        
        
                </div> */
    );
};

export default index;