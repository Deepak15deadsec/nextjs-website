import React from "react";
import Link from "next/link";
import Card from './Card'
import Cardd from './Cardd'

const index = () => {

    return (
        <div className="bg-[#FF6154] flex flex-col justify-left items-left pb-[5rem] lg:px-[5rem] px-[3rem]">
            <p className="text-[3rem] mt-[6rem] font-sans font-[500] text-left tracking-normal pb-10 leading-[3.5rem] text-white">A gamut of engineers & product thinkers<br></br> driven by the opportunity to create fairer financial systems</p>

            <div className="justify-start">

                <Cardd />
                <Card />


            </div>


        </div>
    );
};

export default index;