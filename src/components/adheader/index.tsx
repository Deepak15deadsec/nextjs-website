import React from "react";
import Link from 'next/link'
// import Logo from "../../../public/images/AVNI-logo.svg";
import Logo from "../../../public/images/whiteavni.png"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../google";
import NavLink from "../ActiveLink"
import Image from 'next/image'
import { addSyntheticLeadingComment } from "typescript";
import { useState } from "react";



const Adheader = () => {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false)
    const { googleUrl } = useGetGoogleOAuthURL()
    const links = [


        // {
        //   name: "advertiser",
        //   href: "https://ads.avniads.com"
        // },
        {
            name: "Sign In",
            href: ""
        },
        {
            name: "Get Started",
            href: ""
        },

    ];

    const google = async () => {
        await router.push(googleUrl);
    };

    return (
        <div className="h-[7.275rem] fixed inset-0 z-10 bg-[#30D792] flex justify-between items-center xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">
            <div className="flex space-x-8 items-center">

                <Link href="/">
                    {/* <Image
            alt="Avni Logo"
            src={Logo.src}
            width={117}
            height={78}
          /> */}

                    <Image
                        alt="Avni Logo"
                        src={Logo.src}
                        height={10}
                        width={97}
                    />
                </Link>

            </div>
            <div className="flex space-x-3 items-center ">
                {/* {links.map(({ name, href }, index: number) => (
                    <NavLink href={href} key={index} >
                        {name}
                    </NavLink>
                ))} */}

                <button
                    
                    className="bg-white z-[999] rounded-[3.2rem] px-5 py-3 font-lettera-medium font-[700]  lg:text-[1.2rem]  text-[#333333]"
                >
                    Sign In
                </button>

                <button
                    
                    className="bg-white z-[999] rounded-[3.2rem] px-5 py-3 font-lettera-medium font-[700]  lg:text-[1.2rem]  text-[#333333]"
                >
                    Get Started
                </button>

               

                {/* <button
          onClick={google}
          className="h-[38px] flex justify-center items-center text-white shadow-lg font-lettera-medium font-[500] text-[1.2rem] tracking-normal leading-[2rem]"
        >
          <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
            <FcGoogle size={28} />
          </div>
          <div className="h-full lg:flex md:flex hidden  justify-center items-center bg-blue-500 px-2 rounded-r">
            <p>Sign in with Google</p>
          </div>
        </button> */}


                {/* <img
          src="https://cdn.juno.finance/juno-main-landing/store-icons.svg"
          data-v-ee1708b6=""
        /> */}

            </div>
        </div>
    );
};

export default Adheader;
