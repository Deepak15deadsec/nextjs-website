import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../google";
import JoinModal from "../components/JoinModal";

const GreenCard = ({ content, src }: any) => {

    const router = useRouter();
    const { googleUrl } = useGetGoogleOAuthURL()
    let [isOpen, setIsOpen] = useState(false)
    const google = async () => {
        await router.push(googleUrl);
    };

    return (
        <div className="my-[0rem]  w-full xl:px-[35rem] lg:px-[26rem] md:px-[10rem] px-[2rem]  flex justify-center">
            <div className="rounded-[2.5rem] bg-[#dd245d] lg:px-[5rem] md:px-[5rem] px-[1.5rem] p-8 sm:space-y-5 lg:space-y-5 md:space-y-5 space-y-2 w-auto h-auto">

                <div className="flex space-x-4 justify-center">

                    <div className="space-y-[0.15rem] ">
                        <p className="lg:text-[3rem] md:text-[3rem] text-[1.5rem] font-[700] text-center tracking-normal lg:leading-[3.5rem] md:leading-[3.5rem] leading-[1.8rem] text-[#FFFFFF]">join  pre-launch program today to <br/>claim your  300+ tokens</p>
                    </div>
                </div>





                <div className="flex space-x-3 pt-[0.7rem] justify-center">

                    {/* <button
                        onClick={google}
                        className="h-[4rem]  flex justify-center items-center text-white shadow-lg  font-[400] text-[1.5rem]  leading-[3rem]"
                    >
                        <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
                            <FcGoogle size={50} />
                        </div>
                        <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
                            <p>Sign in with Google</p>
                        </div>
                    </button> */}
                    {
                        isOpen == false && (<button
                            onClick={() => setIsOpen(true)}
                            className="bg-[#30D792] rounded-[3.2rem] px-8 py-4 font-lettera-medium font-[700]  lg:text-[1.5rem]  text-[#333333]"
                        >
                            Join Now
                        </button>)
                    }

                    <JoinModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}

                    />


                </div>

                

            </div>

        </div>
    )
}

export default GreenCard


