import React from "react";
// import Logo from "../../../public/images/AVNI-logo.svg";
import Logo from "../../../public/images/just-logo.webp"
import Link from "next/link";
import Image from 'next/image'
import SocialFollow from "../../socialfollow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const styles = {
  className: 'text-gray-600 block px-2 py-1 hover:underline hover:text-gray-900',
  activeClassName: 'underline text-gray-900'
}



const Footer = () => {
  const footerLinks = [
    // {
    //   name: "comapany",
    //   links: [
    //     { name: "about", href: "/" },
    //     { name: "ewsroom", href: "/" },
    //     { name: "Careers", href: "" },
    //   ],
    // },
    {
      name: "learn",
      links: [
        { name: "blogs", href: "/" },
        { name: "lite paper", href: "/" },
        { name: "faqs", href: "/faq" },
        // { name: "Help Center", href: "/" },
      ],
    },
    // {
    //   name: "Resources",
    //   links: [
    //     { name: "Savings Calculator", href: "/" },
    //     { name: "Compound Calculator", href: "/" },
    //     { name: "Interest Rates", href: "/" },
    //   ],
    // },

    {
      name: "Promote",
      links: [
        { name: "Advertising", href: "/advertiser" },
      
      ],
    },
    {
      name: "legal",
      links: [
        { name: "privacy policy", href: "https://avni.club/privacy-policy" },
        { name: "legal disclosure", href: "https://avni.club/terms-and-conditions" },
      ],
    },
    {
      name: "company",
      links: [
        { name: "about us", href: "/company" },

      ],
    },
    // {
    //   name: "Contact Us",
    //   links: [],},

    // { name: "Talk to us", href: "/contactus" },

    //   {
    //     name: (
    //       <div className="flex space-x-2">
    //         <span>
    //           <FaTwitter size={23} />
    //         </span>
    //         <span>
    //           <FaLinkedin size={23} />
    //         </span>
    //         <span>
    //           <FaTelegram size={23} />
    //         </span>
    //       </div>
    //     ),
    //     href: "/",


    //   },


  ];
  return (
    <div className="bg-[#36454f]   text-[#b3aeb4] ">
      <div className=" w-full xl:px-[22rem] lg:px-[7rem] md:px-[2rem] px-[1rem] flex justify-between   ">
        <div className="space-y-[1rem] w-3/4 mb-[2rem] mt-[2rem]">

          <Image
            alt="Avni Logo"
            src={Logo.src}
            height={28}
            width={87}
            className="object-contain"
          />

          <p className="text-left font-[400] w-[75%] text-[1.1rem] leading-[1.5rem]  ">
            at avni we are bridging the gap between consumers and brands with trust, value, and shared experiences.<br /> all data and transactions are encrypted to ensure a completely secure experience for our users. <br /> no data is shared with adverisers or any agencies.
            <br /> <br /> (c) 2023 Avni AdTech Inc

          </p>

        </div>
        <div className=" w-3/4 justify-center mb-[2rem] lg:mt-[6rem] md:mt-[6rem] mt-[3.5rem]">

          <div className="grid xs:grid-cols-1 lg:grid-cols-5 md:grid-cols-5 grid-cols-2   ">



            {footerLinks.map(({ name, links }: any, index: number) => (
              <div key={index} >
                <p className="font-lettera-bold font-[500] text-[1.5rem] tracking-normal leading-[1.5rem] mt-[2rem] lg:mt-[0rem] md:mt-[0rem]  text-[#ffffff] ">
                  {name}
                </p>
                <div className="flex flex-col space-y-3 mt-[1rem]">

                  {links.map(({ name, href }: { name: string; href: string }) => (
                    <Link
                      className="font-lettera-regular font-[400] text-[1.1rem]  tracking-normal leading-[1.2rem]   "
                      href={href}
                      key={name}
                    >
                      {name}
                    </Link>

                  ))

                  }

                </div>

              </div>
            ))}
            <div className=" font-lettera-bold font-[500] text-[1.5rem] tracking-normal leading-[1.5rem] md:mt-[0rem] mt-[2rem] lg:mt-[0rem] text-[#ffffff]  ">
              <p>contact us</p>
              <div className="mt-[0.7rem]"></div>

              <a className="text-[#b3aeb4]  text-[1.1rem]" href="/contactus">support</a>

              <div className="flex flex-row space-x-2 pt-[1rem]">


                <a href="https://twitter.com/avniclub" target="_blank" rel=" noreferrer">
                  <FontAwesomeIcon icon={faTwitter} height={30}
                    width={30} color="#b3aeb4" />
                </a>



                <a href="https://www.linkedin.com/company/avniclub" target="_blank" rel=" noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} height={30}
                    width={30} color="#b3aeb4" />
                </a>

                <a href="https://t.me/s/avniclub" target="_blank" rel=" noreferrer">
                  <FontAwesomeIcon icon={faTelegram} height={30}
                    width={30} color="#b3aeb4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* <div className="px-[10rem] space-y-4 py-[3rem]">
        <img
          src="https://cdn.juno.finance/BC-Verified-Light.svg"
          alt="BitCompare"
          className="xs:w-auto xs:h-6 cursor-pointer"
        />
       
        <p className="font-lettera-regular font-[400] text-[0.875rem] tracking-normal leading-[1.33rem] text-[#b3b3b3]">
          © Copyright 2022 Avni by CapitalA, Inc
        </p>
      </div> */}


    </div>

  );
};

export default Footer;
