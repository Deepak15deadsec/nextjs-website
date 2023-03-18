import React from "react";


const index = () => {

    return (

        <div className="bg-[#67A3D9] pt-[15rem] pb-[15rem]">

            <div className="flex xl:px-[22rem] lg:px-[7rem] ">
                <div className="flex flex-col w-full space-y-[5rem] pt-[1rem] xl:px-[22rem]">
                    
                    <p className="ml-[2.5rem] text-center font-[500] lg:text-[4.2rem]  md:text-[2rem] text-[#FFFFFF]">
                    CAMPUS  PROGRAM

                    </p>
                                       

                    <p className="text-left font-[100] lg:text-[2rem] text-[#FFFFFF]">
                    We aim to engage with and educate the next generation of passionate youngsters on starting a revolution in their campus by giving them the opportunity to become the face and voice of AVNI on campus.
                    Your work as a campus ambassador for AVNI will entail the following:</p>
                    {/* <p className="text-left font-[100] lg:text-[2rem] text-[#FFFFFF]"></p> */}
                    <div className="text-left font-[100] lg:text-[2rem] text-[#FFFFFF] style={{ display: 'inline', float: 'left' }}">
                    <ol style={{ listStyleType: 'disc' }}>
                    <li> Hosting AVNI-centric contests, events, and workshops.</li>
                    <li> Building a strong network of Web3 & Crypto enthusiast around you with your skills and network.</li>
                    <li>Becoming a Web3 Ad-Tech & User-First advocate!</li>
                    <li>Boost your resume by becoming an AVNI advocate, an Ad-Tech blockchain startup of the future!</li></ol>
                    </div>

                    

                   </div>

          


            </div>


          

        </div>


    );
};

export default index;
