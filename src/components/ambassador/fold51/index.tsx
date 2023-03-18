import React from "react";
import Image from "next/image";
import Ambassador from "../../../../public/images/ambassador.png"
import { FcGoogle } from "react-icons/fc";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import { formURL } from "../../../form"

const index = () => {

        const openInNewTab = (url: string | URL | undefined) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
          }
    return (

        <div className="bg-[#434343] pt-[15rem]  ">

            <div className="flex flex-col justify-center items-center pb-[5rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-full space-y-[5rem] pt-[5rem]">
                    <p className="text-center font-[600] lg:text-[4rem] lg:leading-[4rem] md:text-[1rem] md:leading-[2rem] text-[#FFFFFF]">
                    We are excited to announce our Ambassador program.
                    </p>

                    <p className="text-center font-[400] pb-[5rem] lg:text-[2.5rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    Join us on this mission and build the future of advertising!
                    </p>
                </div>

                 <button onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdRCS1T45mEvvgbY_-j0esPbXM4F-_AG_z7CgDlzYST_9Wwdw/viewform?usp=pp_url&entry.407278199=https://')} className="rounded-[1rem] bg-[#01A4EF]  p-8 space-y-5 w-[13rem] h-[5rem]">
                 
                  <p className="text-[1.5rem] font-Open-Sans font-[500]  tracking-normal leading-[1rem] text-[#FFFFFF]">Join</p>
                        </button>
                   

                </div>


            </div>


          

      );
};


export default index;
