import React from "react";
import Link from "next/link";
import Card from './Card'
import Cardd from './Cardd'

const index = () => {

    return (
        <div className="bg-[#FF6154] mt-[0rem]  flex flex-col justify-center items-center lg:px-[5rem] px-[3rem]">
            <p className="text-[3rem] mt-[6rem] font-sans font-[500] text-center tracking-normal leading-[3.5rem] text-white">a collective of engineers, designers, and product thinkers driven<br />by the opportunity to create fairer financial systems</p>

            <div className="grid xs:grid-cols-1 grid-cols-2 gap-3 mt-[3rem] mb-[4rem]">

                <Cardd />
                <Card />


            </div>


        </div>
    );
};

export default index;