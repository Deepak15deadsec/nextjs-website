import React from 'react'
import { useState } from "react";
import shapes from '../../../../public/images/artcoin.svg'
import Image from 'next/image'
import Bulb from '../../../../public/images/bulb.png'
import Select from '../../../../public/images/select.png'
import SignUp from '../../../../public/images/signup.png'
import GetStarted from '../../../../public/images/getstarted.png'
import holder from "../../../../public/images/security.png"
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../../google";
import { FcGoogle } from "react-icons/fc";
import JoinModal from "../../JoinModal";

const index = () => {

  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  let [isOpen, setIsOpen] = useState(false)

  const google = async () => {
    await router.push(googleUrl);
  };

  const openInNewTab = (url: string | URL | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

    return (
        <div className="bg-[#434343]   ">
            <div className="flex justify-between pt-[10rem] pb-[10rem] bg-[#353dab] xl:px-[22rem] lg:px-[7rem] px-[3rem] ">
                <div className="w-[75%]  pt-[1rem]">

                    <p className="text-left font-[600] pl-[4rem]  lg:text-[3rem] lg:leading-[3rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
                    The $ART in avni ad-platform
                    </p>
                    <div className='space-y-[1rem] mt-[5rem]'>
                    <div className='flex space-x-[1rem]  pl-[4rem]'>
                            < Image
                                height={50}
                                width={50}
                                src={Bulb.src}
                                alt="Avni Hero"
                                className="object-contain"
                            />

                            <p className="text-left font-[500] pt-[0.8rem] lg:text-[2rem] lg:leading-[2rem] md:text-[2rem] md:leading-[3rem] text-[#cbcbcb]">
                            How it works
                            </p>
                        </div>
                        <div className='pt-[3rem] '>
                        <div className='flex space-x-[1rem] pb-[3rem]'>
                            < Image
                                height={40}
                                width={40}
                                src={Select.src}
                                alt="Avni Hero"
                                className="object-contain"
                            />
                            <div className="pl-[1rem] text-left font-[500]  lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[2rem] md:leading-[5rem] text-[#cbcbcb]">
                            With avni the data ownership is back to the user once they join <br/> Start earning $ART tokens for ad-engagement from your favorite brands while we ensure your privacy & security
                            </div>
                        </div>

                        <div className='flex space-x-[1rem] pt-20'>
                            < Image
                                height={40}
                                width={40}
                                src={Select.src}
                                alt="Avni Hero"
                                className="object-contain"
                            />
                            <div className="pl-[1rem] text-left font-[500]  lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[2rem] md:leading-[5rem] text-[#cbcbcb]">
                            ROI based efficient approach for advertisers <br/> Measure each ad-unit with avni's transaction settlement system try transaction based campaigns aside from impression based
                            </div>
                        </div>       
                        </div>
                          </div>

                    
                                </div>
                <div className=' grid grid-flow-row items-center pt-[5rem] mr-25'>
                    <div className='pt-[4.5rem] mt-5'>
                {
                        isOpen==false && (<button 
                        onClick={() => setIsOpen(true)}
                        className="bg-[#353dab] z-[999] rounded-[3.2rem] px-8 py-4 font-lettera-medium font-[700] text-center lg:text-[1.5rem] text-[#cbcbcb]"
                        >< Image
                        height={200}
                        width={235}
                        src={SignUp.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />

                       <p className='bg-[#434343] rounded-[1rem] px-2 py-2'> Collect 50 ART Tokens</p>
                       
                        </button>)
                    }

      <JoinModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        
      />
      </div>
      <div className='pt-[2rem] mt-5'>
      <button onClick={() => openInNewTab('https://ads.avniads.com/')}
                        className="bg-[#353dab] rounded-[3.2rem] px-5 py-2 font-lettera-medium font-[700] lg:text-[1.5rem] text-center text-[#cbcbcb]">
                        < Image
                        height={250}
                        width={270}
                        src={GetStarted.src}
                        alt="Avni Hero"
                        className="object-contain"
                    />       
                        <p className='bg-[#434343] rounded-[1rem] px-8 py-2'> With 1000 ad credits </p>
                        </button>
      </div>
      </div>
               
            </div>
        </div>
    )
}

export default index