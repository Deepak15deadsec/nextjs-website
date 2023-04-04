import React from 'react'
import Image from 'next/image'

export const Card = ({ title, img, number }: { title: string, img: string, number: string }) => {
    return (
        <div className="rounded-[2.5rem] shadow-inner bg-[#FFFFFF]  p-8 space-y-2 w-[27.3rem] ">


            <p className="text-[1.5rem] font-lettera-medium font-[400] text-left tracking-normal leading-[3rem] text-[#333333]">{title}</p>

            <div className="flex justify-between items-center">
                <p className="text-[4rem] font-lettera-regular font-[700] text-left tracking-normal leading-[2rem] text-[#333333] ">
                    {number}
                </p>
                <Image
                    src={img}
                    alt="Fortune"
                    height={150}
                    width={150}
                    className=" object-contain "
                />
            </div>


        </div>
    )
}
