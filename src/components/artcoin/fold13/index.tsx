import React from "react";
import Card from './Card'
import Cardd from './Cardd'
import Carddd from './Carddd'
import Cardddd from './Cardddd'




const Fold13 = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mt-[-2rem]  w-full mb-[4rem]  ">
        <div className="flex justify-between px-[0rem]">
          <div className="space-y-[1.5rem] xl:px-[15rem] lg:ml-[8rem] md:ml-[4rem] ml-[2rem] mb-[3rem]  ">

            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[3rem] mb-[4rem]">
              <Card />
              <Cardd />
              <Carddd />
              <Cardddd />

            </div>

            {/* <div className="flex justify-start space-x-[1.5rem] items-center mt-[3rem]">
              <Card />
              <Cardd />

            </div>
            <div className="flex justify-start space-x-[1.5rem] items-center mt-[0rem] ">
              <Carddd />
              <Cardddd />

            </div> */}

          </div>
          <div className="space-y-[1.5rem]  w-2/5 mt-[2rem] bg-[url('/images/bg-logo.svg')] bg-[length:1000px_600px]">
            <p className="font-Open-Sans text-[#FF6154] text-right font-[700] md:mt-[5rem] lg:mt-[14rem] mt-[18rem] mr-[3.2rem] text-[3rem] tracking-normal leading-[5rem]">
              Earn from  your  data
            </p>
            <p className="font-lettera-regular text-[#333333] font-[400] text-[1.4rem] mr-[3rem] text-right tracking-normal leading-[1.8rem] ">
              Large corporations using your data and advertising to you. and they are generating billion of dollers from using you and your data.
            </p>

            {/* <button className="bg-blue-500 rounded p-3.5 font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1.33rem]">
              Learn More
            </button> */}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Fold13;
