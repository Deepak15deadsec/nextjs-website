import React from "react";
import Link from "next/link";
import Card from './Card'
import Cardd from './Cardd'

const index = () => {

    return (

        <div className= "bg-[#FF6154] py-[15rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[2rem] ">

        <div className="flex justify-between lg:px-[7rem] px-[3rem] py-5">
            <div className="flex flex-col text-left w-[65%] space-y-[3rem] ">
                
            <p className="text-left  w-[60%] font-[800]  lg:text-[10rem] lg:leading-[10rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            team           </p>
                <p className="text-left  w-[80%] font-[800]  lg:text-[2.8rem] lg:leading-[3rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
               a gamut of engineers & product thinkers  driven by the passion to create a better transperant advertising platform  </p>
    
               
    
              
    
               </div>
    
               <div className="justify-left w-[50%]">

<Cardd />
<Card />


</div>
                
    
            
        </div>
    </div>






/*

        <div className="bg-[#FF6154] flex flex-col justify-left items-left pb-[5rem] lg:px-[7rem] px-[3rem]">
            <p className="text-[3rem] mt-[6rem] font-sans font-[500] text-left tracking-normal pb-10 leading-[3.5rem] text-white">A gamut of engineers & product thinkers<br></br> driven by the opportunity to create fairer financial systems</p>

            <div className="justify-start">

                <Cardd />
                <Card />


            </div>


        </div> */
    );
};

export default index;