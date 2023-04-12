import React from "react";
import Logo from '../../../../public/images/google.svg';
import Videoo from '../../../../public/images/video.svg'
import GreenCard from "../../GreenCard"
import Video from "../../video"

const index = () => {
  return (
    <div className="w-full bg-[#0169ff] pb-[10rem]">


      <div className=" w-full xl:px-[22rem] px-[14rem] lg:flex md:flex hidden justify-between">
        <div className="space-y-[2.5rem] w-[65%] mt-[10rem] ">

          <p className="text-left font-[800]  lg:text-[9rem] lg:leading-[9rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
            change is now</p>

          <p className="text-left font-[400] mt-[3rem] w-[60%] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
            we are changing the way companies are using user's privacy and data for their benefit to generate billions
          </p>


          <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
            Join the change
          </button>
        </div>





        {/* <div className="space-y-[8rem] mt-[8rem] "> */}
        <Video />
        {/* </div> */}

        {/* <div className=" space-y-[8rem] w-3/4 mt-[3rem]">
          <iframe height="493px"
            width="881px" src="https://www.youtube.com/embed/0qJMthMEscw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div> */}

      </div>


      <div className=" w-full px-[3rem] lg:hidden md:hidden flex flex-col justify-center">
        <div className="space-y-[2.5rem] w-[65%] mt-[10rem] ">

          <p className="text-left font-[800]  lg:text-[9rem] lg:leading-[9rem] md:text-[2rem] md:leading-[3rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
            change is now</p>

          <p className="text-left font-[400] mt-[3rem] w-[60%] lg:text-[2.8rem] lg:leading-[4rem] md:text-[2rem] md:leading-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFFFFF]">
            we are changing the way companies are using user's privacy and data for their benefit to generate billions
          </p>


          <button className="bg-[#FFFFFF] mt-[3rem] rounded-[3.2rem] lg:p-10 md:p-6 p-3 font-lettera-medium font-[700] px-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[#333333] tracking-normal leading-[1.33rem]">
            Join the change
          </button>
        </div>





        {/* <div className="space-y-[8rem] mt-[8rem] "> */}
        <Video />
        {/* </div> */}

        {/* <div className=" space-y-[8rem] w-3/4 mt-[3rem]">
          <iframe height="493px"
            width="881px" src="https://www.youtube.com/embed/0qJMthMEscw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div> */}

      </div>

    </div>
  );
};

export default index;
