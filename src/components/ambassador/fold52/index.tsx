import React from "react";
import Image from "next/image";
import BrandAmbassador from "../../../../public/images/brandambassador.png"

const index = () => {

    return (

        <div className="bg-[#804c24] pt-[3rem] ">

            <div className="flex justify-between lg:px-[7rem] px-[3rem] py-5">
                <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">
                    
                    <p className="  font-[500]  text-[5rem]  text-[#FFFFFF]">
                    Change is here...
                    </p>

                    <p className="  font-[450] text-[3rem]  text-[#FFFFFF]">
                    Web3 is here to revolutionize the face of advertising & You can be a part of it!
                    </p>

                    <p className=" font-[400] text-[2rem] text-[#FFFFFF]">
                    We believe in creating a more transparent, secure, user-first advertising model that rewards people and gives the data ownership back into their hands
                    </p> 

                    <p className=" font-[400] text-[2rem] pb-[5rem] text-[#FFFFFF]">
                    With avni-ambassador program be a part of the shared vision and get special rewards along with bragging rights!!
                    </p> 
                   

                   </div>

                <div className=" pt-12">
                    < Image
                        height={500}
                        width={500}
                        src={BrandAmbassador.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                    

                </div>


            </div>


          

        </div>


    );
};

export default index;
