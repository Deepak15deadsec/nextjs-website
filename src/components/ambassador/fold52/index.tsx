import React from "react";
import Image from "next/image";
import Crew from "../../../../public/images/crew.png"

const index = () => {

    return (

        <div className="bg-[#DE6FA1] pt-[3rem] ">

            <div className="flex xl:px-[22rem] pb-[3rem] lg:px-[7rem] px-[3rem]">
                <div className="flex flex-col justify-center items-center w-[60%] space-y-[5rem] pt-[0.5rem] xl:px-[22rem]">
                    
                    <p className=" text-center font-[500]  pt-[5rem] lg:text-[3.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[2rem] text-[#FFFFFF]">
                    Change is here 
                    </p>

                    <p className=" text-center font-[100] lg:text-[2rem] lg:leading-[2rem] md:text-[2rem] md:leading-[2rem] text-[#FFFFFF]">
                    Web3 is here to revolutionise the face of Advertising & You can be a part of it!
                    </p>

                    <p className="text-center pl-[3rem] font-[100] lg:text-[2rem] lg:leading-[2.5rem] md:text-[1rem] md:leading-[1rem] text-[#FFFFFF]">
                    We believe in creating a more transparent, secure, User-First advertising model that benefits people and gives the Data ownership back into their hands. 
                    </p> 

                    <p className="text-center pl-[3rem] font-[100] lg:text-[2rem] lg:leading-[2rem] md:text-[1rem] md:leading-[1rem] text-[#FFFFFF]">
                    Here’s an opportunity to shape the future of advertising. 
                    </p> 
                   

                   </div>

                <div className="space-y-[4rem] pb-[3rem] pr-[3rem]">
                    < Image
                        height={400}
                        width={500}
                        src={Crew.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    

                </div>


            </div>


          

        </div>


    );
};

export default index;
