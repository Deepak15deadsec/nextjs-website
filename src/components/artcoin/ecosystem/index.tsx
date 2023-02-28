import React from 'react'
import shapes from '../../../../public/images/artcoin.svg'
import Image from 'next/image'
import holder from "../../../../public/images/security.png"

const index = () => {
    return (
        <div className="bg-[#434343]   ">
            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#353dab] xl:px-[22rem] lg:px-[7rem] px-[3rem] ">
                <div className="w-[60%]  pt-[1rem]">

                    <p className="text-left font-[600]  lg:text-[3rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                        BAT Ad Ecosystem
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
                                Users earn for their attention
                            </p>
                        </div>

                        <p className="text-left font-[300]  lg:text-[1.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#eccdcd]">
                            Users maintain privacy as they earn BAT for viewing ads.
                        </p>
                        <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-3 font-lettera-medium font-[700] px-[2rem] lg:text-[1.5rem] md:text-[1rem] text-[#353dab] tracking-normal leading-[1.33rem]">
                            Sign up for Brave Rewards
                        </button>
                    </div>

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
                            Creators get paid for making great content
                            </p>
                        </div>

                        <p className="text-left font-[300] w-[75%] lg:text-[1.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#eccdcd]">
                        Publishers and creators earn ad revenue and user contributions as well as tips.
                        </p>
                        <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-3 font-lettera-medium font-[700] px-[2rem] lg:text-[1.5rem] md:text-[1rem] text-[#353dab] tracking-normal leading-[1.33rem]">
                            Join Verified Creator Network
                        </button>
                    </div>

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
                            Advertisers get a better return
                            </p>
                        </div>

                        <p className="text-left font-[300] w-[75%] lg:text-[1.5rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#eccdcd]">
                        Brave’s anonymous accounting lets advertisers know their ads’ effectiveness without violating privacy.
                        </p>
                        <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] p-3 font-lettera-medium font-[700] px-[2rem] lg:text-[1.5rem] md:text-[1rem] text-[#353dab] tracking-normal leading-[1.33rem]">
                           Learn More
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