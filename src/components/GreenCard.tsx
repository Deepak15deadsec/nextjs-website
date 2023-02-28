import React from 'react'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../google";

const GreenCard = ({ content, src }: any) => {

    const router = useRouter();
    const { googleUrl } = useGetGoogleOAuthURL()
  
    const google = async () => {
      await router.push(googleUrl);
    };

    return (
        <div className="my-[0rem]  w-full xl:px-[38rem] lg:px-[10rem]  flex justify-center">
            <div className="rounded-[2.5rem] bg-[#67DF87] px-[5rem] p-8 sm:space-y-5 lg:space-y-5 md:space-y-5 space-y-2 w-auto h-auto">

                <div className="flex space-x-4 justify-center">

                    <div className="space-y-[0.15rem] ">
                        <p className="text-[3rem]  font-[700] text-center tracking-normal leading-[3rem] text-[#333333]">Join our pre-launch program today and<br />make every shopping</p>
                    </div>
                </div>





                <div className="hidden md:flex lg:flex space-x-3 pt-[2rem] justify-center">

                    <button
                        onClick={google}
                        className="h-[4rem]  flex justify-center items-center text-white shadow-lg  font-[400] text-[1.5rem]  leading-[3rem]"
                    >
                        <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
                            <FcGoogle size={50} />
                        </div>
                        <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
                            <p>Sign in with Google</p>
                        </div>
                    </button>


                </div>

                <div className="flex md:hidden lg:hidden space-x-3 justify-center">

                <button
                        onClick={google}
                        className="h-[4rem]  flex justify-center items-center text-white shadow-lg  font-[400] text-[1.5rem]  leading-[3rem]"
                    >
                        <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
                            <FcGoogle size={50} />
                        </div>
                        <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
                            <p>Sign in with Google</p>
                        </div>
                    </button>


                </div>

            </div>

        </div>
    )
}

export default GreenCard


