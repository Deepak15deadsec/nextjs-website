import React from "react";
import Link from 'next/link'
// import Logo from "../../../public/images/AVNI-logo.svg";
import Logo from "../../../public/images/group2.png"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../google";
import NavLink from "../ActiveLink"
import Image from 'next/image'
import { addSyntheticLeadingComment } from "typescript";
import { useState } from "react";
import JoinModal from "../JoinModal";


const Header = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)
  const { googleUrl } = useGetGoogleOAuthURL()
  const links = [

    {
      name: "action reward token",
      href: "/artcoin"
    },
    // {
    //   name: "advertiser",
    //   href: "https://ads.avniads.com"
    // },
    // {
    //   name: "advertiser",
    //   href: "/advertiser"
    // },
    {
      name: "ambassador",
      href: "/ambassador"
    },
    // {
    //   name: "Company",
    //   href: "/company",
    // },
    // {
    //   name: "FAQs",
    //   href: "/faq",
    // },
    // {
    //   name: "Contact",
    //   href: "/contactus"
    // },
  ];

  const google = async () => {
    await router.push(googleUrl);
  };

  return (
    <div className="h-[7.275rem] fixed inset-0 z-10 bg-[#36454F] flex justify-between items-center xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">
      <div className="flex space-x-8 items-center">

        <Link href="/">
          <Image
            alt="Avni Logo"
            src={Logo.src}
            width={157}
            height={118}
          />
        
          {/* <Image
            alt="Avni Logo"
            src={Logo.src}
            height={8}
            width={67}
          /> */}
        </Link>

      </div>
      <div className="flex space-x-8 items-center">
        {links.map(({ name, href }, index: number) => (
          <NavLink href={href} key={index} >
            {name}
          </NavLink>
        ))}


        <JoinModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

        >
            <button className="bg-white z-[999] rounded-[3.2rem] px-5 py-3 font-lettera-medium font-[700]  lg:text-[1.2rem]  text-[#333333]">
                    Join Now
                </button>
          </JoinModal>

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

export default Header;
