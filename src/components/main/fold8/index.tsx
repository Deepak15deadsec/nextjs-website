import React from "react";
import Logo from '../../../../public/images/google.svg';
import Videoo from '../../../../public/images/video.svg'
import GreenCard from "../../GreenCard"
import Video from "../../video"

const index = () => {
  return (
    <div className="w-full bg-[#216169] pb-[10rem]">


      <div className=" w-full xl:px-[22rem] px-[7rem] flex justify-between">
        <div className="space-y-[2.5rem] w-[65%] mt-[10rem] ">
          <p className="text-left font-[800]  lg:text-[9rem] lg:leading-[9rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
          It's your time!         </p>
          <p className="text-left font-[500] w-[90%] mt-[3rem] lg:text-[3.8rem] lg:leading-[4.1rem] md:text-[2rem] md:leading-[3rem] text-[#FFFFFF]">
          To earn from your own data when Big companies use it to generate Billions of Dollars, at times without proper consent
          </p>
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
