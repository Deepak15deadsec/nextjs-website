import React from "react";
import Link from 'next/link'
// import Logo from "../../../public/images/AVNI-logo.svg";
import Logo from "../../../public/images/avni-logo2.png"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../google";
import NavLink from "../ActiveLink"
import Image from 'next/image'


const Header = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const links = [
    {
      name: "$ART",
      href: "/artcoin"
    },
    {
      name: "Company",
      href: "/company",
    },
    {
      name: "FAQs",
      href: "/faq",
    },
    {
      name: "Contact",
      href: "/contactus"
    },
  ];

  const google = async () => {
    await router.push(googleUrl);
  };

  return (
    <div className="h-[7.275rem] fixed inset-0 z-10 bg-[#434343] flex justify-between items-center xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">
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
          height={8}
          width={67}
          />
        </Link>
      </div>
      <div className="flex space-x-8 items-center">
        {links.map(({ name, href }, index: number) => (
          <NavLink href={href} key={index} >
            {name}
          </NavLink>
        ))}
        <button
          onClick={google}
          className="h-[38px] flex justify-center items-center text-white shadow-lg font-lettera-medium font-[500] text-[1.2rem] tracking-normal leading-[2rem]"
        >
          <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
            <FcGoogle size={28} />
          </div>
          <div className="h-full lg:flex md:flex hidden  justify-center items-center bg-blue-500 px-2 rounded-r">
            <p>Sign in with Google</p>
          </div>
        </button>


        {/* <img
          src="https://cdn.juno.finance/juno-main-landing/store-icons.svg"
          data-v-ee1708b6=""
        /> */}
        {/* <button className="flex items-center space-x-4 bg-black rounded-[1rem] ">
          <AiFillApple color="fff" />
          <IoLogoGooglePlaystore color="fff" />
        </button> */}
      </div>
    </div>
  );
};

export default Header;
