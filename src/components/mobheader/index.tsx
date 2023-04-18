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
import JoinMobile from "../JoinMobile";


const Mobile = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)
  const [isOpenn, setIsOpenn] = useState(false);
  const { googleUrl } = useGetGoogleOAuthURL()
  const links = [

    {
      name: "token",
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
      <div className="flex space-x-4 items-center">
        
        <Link href="/">
          <Image alt="Avni Logo" src={Logo.src} width={157} height={118} />

        </Link>
        <button
          onClick={() => setIsOpenn(!isOpenn)}
          className="lg:hidden text-white"
        >
          {/* Hamburger menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <nav
          className={`lg:flex items-center space-x-4 ${isOpenn ? "flex" : "hidden"
            }`}
        >
          {links.map(({ name, href }, index) => (
            <NavLink href={href} key={index}>
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex items-center">

      <JoinMobile
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

        >
            <button className="bg-white z-[999] rounded-[3.2rem] px-5 py-3 font-lettera-medium font-[700]  lg:text-[1.2rem]  text-[#333333]">
                    Join Now
                </button>
          </JoinMobile>
      </div>
    </div>
  );
}
export default Mobile;
