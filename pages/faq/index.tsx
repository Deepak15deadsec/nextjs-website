import React from 'react'
import { Fold31 } from "../../src/components/faq"
import { Fold9 } from "../../src/components/main"
import Logo from '../../public/images/question.svg'
import GreenCard from '../../src/components/GreenCard'
import Image from 'next/image'
import Content from "./Content"
import Head from 'next/head'
import Google from '../../public/images/google.svg'

const Faq = () => {
    return (
        <div className='pt-[7rem]'>

        <Head>
                <title>FAQ</title>
                <meta name="description" content="Avni" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


        <main className="bg-[#FFFFFF]">

            <Fold31 />
            <Content />
            <div className="w-full bg-[#EEEEEE] py-[2.5rem]">
                <div className=" xl:px-[22rem] lg:px-[8.75rem] md:px-[8.75rem] px-[1.5rem] flex justify-between items-center">
                    <div className="flex space-x-5">
                        <Image
                            src={Logo.src}
                            alt="Fortune"
                            height={100}
                            width={100}
                            className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="font-sans text-[#333333] font-[400] text-[1.875rem] text-left tracking-normal leading-[2rem]">
                                Still have questions?
                            </p>
                            <p className="font-sans text-[#333333] font-[400] text-[1.25rem] text-left tracking-normal leading-[2rem]">
                                Can’t find answer you’re looking for? Please chat to our friendly team.
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="p-7 font-[700] text-[1.5rem] leading-[24px] rounded-[1.25rem] bg-[#01A4EF] text-white">Get Touch</button>
                    </div>
                </div>
            </div>
            <div className='mt-[5rem]'></div>
            <GreenCard src={Google.src} content={<p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">Sound too good to be true? Here’s the deal: Stores wants you to transact at their stores via <br /> offers and promotions we provide. we use the advertising revenue as Cash Back in Token.<br /> Everyone wins</p>}/>
            <Fold9 />
           
        </main>

        </div>
    )
}

export default Faq;