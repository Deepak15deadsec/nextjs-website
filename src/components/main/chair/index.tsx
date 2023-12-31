import React, { useState } from "react";
import Image from "next/image";
import shapes from '../../../../public/images/deserve-more-bg.png'
import JoinModal from "../../JoinModal";
import JoinMobile from "../../JoinMobile";

const index = () => {
    let [isOpen, setIsOpen] = useState(false)

    return (

        <div className=" py-[15rem] xl:px-[22rem] lg:px-[14rem] md:px-[4rem] px-[2rem] bg-[url('/images/yellowchairtest.webp')] bg-cover bg-right">



            <div className="flex justify-left ">
                <div className="w-[55%] ">
                    <p className="text-left font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                        you are special
                    </p>
                    <p className="text-left font-[500] mt-[3rem] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2rem] text-[1.5rem] text-[#FFFFFF]">
                        and so are the offers                  <br />   receive personalised & exclusive offers

                    </p>
                    <p className="text-left font-[400]  pt-[2rem] w-[80%] lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[1.2rem] md:leading-[1.5rem] text-[1rem] text-[#FFFFFF]">
                    </p>

                    <div className="lg:flex md:flex hidden">
                    <JoinModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}

                    >
                        <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
                            Join the club
                        </button>
                    </JoinModal>
                    </div>

                    <div className="lg:hidden md:hidden flex">
                        <JoinMobile
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}

                        >
                            <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
                            Join the club
                            </button>
                        </JoinMobile>
                    </div>


                </div>


            </div>

        </div>

    );
};

export default index;
