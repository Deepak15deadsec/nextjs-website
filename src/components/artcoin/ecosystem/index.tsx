import React from 'react'
import shapes from '../../../../public/images/artcoin.svg'
import Image from 'next/image'
import holder from "../../../../public/images/security.png"
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../../google";
import { FcGoogle } from "react-icons/fc";


const index = () => {

    const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()

  const google = async () => {
    await router.push(googleUrl);
  };

    return (
        <div className="bg-[#434343]   ">
            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#353dab] xl:px-[22rem] lg:px-[7rem] px-[3rem] ">
                <div className="w-[60%]  pt-[1rem]">

                    <p className="text-left font-[600]  lg:text-[3rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    ART Advertising platform
                    </p>
                    <div className='space-y-[1rem] mt-[5rem]'>
                        <div className='flex space-x-[1rem]'>
                            < Image
                                height={32}
                                width={32}
                                src={holder.src}
                                alt="Avni Hero"
                                className="object-contain"
                            />
                            <p className="text-left font-[400]  lg:text-[1.75rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                            Users Earn for Consent & Data
                            </p>
                        </div>

                        <p className="text-left font-[300] w-[75%] lg:text-[1.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#eccdcd]">
                        Keeping the privacy intact while serving offers & ads, as they earn ART for <br/> ad-engagement.
                        </p>
                        {/* <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-3 font-lettera-medium font-[700] px-[2rem] lg:text-[1.5rem] md:text-[1rem] text-[#353dab] tracking-normal leading-[1.33rem]">
                            Sign up for Brave Rewards
                        </button> */}
                        <button
                            onClick={google}
                             className="h-[45px] flex justify-center items-center text-white shadow-lg font-lettera-medium font-[700] text-[1.4rem] tracking-normal leading-[2rem]"
                                >
                        {/* <button
                            onClick={google}
                             className="h-[48px] flex justify-center rounded-[3.2rem] items-center text-white shadow-lg font-lettera-medium font-[700] text-[1.5rem] tracking-normal leading-[1.33rem]"
                                >         */}
                        {/* <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
                             <FcGoogle size={28} />
                         </div>
                         <div className="h-full lg:flex md:flex hidden  justify-left items-center bg-blue-500 px-2 rounded-r">
                            <p>Sign in with Google</p>
                        </div> */}
                        {/* <div className="bg-white h-full flex justify-center items-center px-2 rounded-[3.2rem]">
                             <FcGoogle size={35} />
                         </div> */}
                        <div className="h-full lg:flex md:flex hidden text-[#353dab] justify-left items-center bg-[#FFFFFF] px-[1rem] rounded-[3.2rem] ">
                        <FcGoogle size={35} /> <p className='ml-[0.5rem] '>Sign up for Brave Rewards</p>
                        </div>
                        
                        </button>
                          </div>

                    {/* <div className='space-y-[1rem] mt-[5rem]'>
                        <div className='flex space-x-[1rem]'> */}
                            {/* < Image
                                height={32}
                                width={32}
                                src={holder.src}
                                alt="Avni Hero"
                                className="object-contain"
                            /> */}
                            {/* <p className="text-left font-[400]  lg:text-[1.75rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                            Creators get paid for making great content
                            </p> */}
                        {/* </div> */}

                        {/* <p className="text-left font-[300] w-[75%] lg:text-[1.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#eccdcd]">
                        Publishers and creators earn ad revenue and user contributions as well as tips.
                        </p> */}
                        {/* <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-3 font-lettera-medium font-[700] px-[2rem] lg:text-[1.5rem] md:text-[1rem] text-[#353dab] tracking-normal leading-[1.33rem]">
                            Join Verified Creator Network
                        </button> */}
                    {/* </div> */}

                    <div className='space-y-[1rem] mt-[5rem]'>
                        <div className='flex space-x-[1rem]'>
                            < Image
                                height={32}
                                width={32}
                                src={holder.src}
                                alt="Avni Hero"
                                className="object-contain"
                            />
                            <p className="text-left font-[400]  lg:text-[1.75rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                            ROI based Efficient approach for Advertisers
                            </p>
                        </div>

                        <p className="text-left font-[300] w-[75%] lg:text-[1.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#eccdcd]">
                        Avni's transaction settlement system allows Advertisers to measure each <br/> ad-unit.<br/> To help you get started with Avni Ads, we will give you 1000 transaction <br/> ad credit. Give it a try for free.
                        </p>
                        <button className="bg-[#FFFFFF] mt-[3.5rem] rounded-[3.2rem] p-3 font-lettera-medium font-[700] px-[2rem] lg:text-[1.5rem] md:text-[1rem] text-[#353dab] tracking-normal leading-[1.33rem]">
                           Get Started
                        </button>
                    </div>

                </div>
                <div>
                    < Image
                        height={814}
                        width={600}
                        src={shapes.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default index