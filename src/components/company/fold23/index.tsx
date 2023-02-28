import React from "react";
import Laptop from '../../../../public/images/laptop.svg';
import Office from '../../../../public/images/office.svg';


const Fold23 = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mt-[-2rem]  w-full mb-[4rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[1rem]">
        <div className="flex justify-between ">
          <div className="space-y-[1.5rem] w-1/2   ">

            <div className="flex justify-start space-x-[2rem] items-center ">
              <div className="space-y-6">

                <img
                  src={Laptop.src}
                  alt="Sandeep Nailwal"
                  className="w-[24rem] h-[33rem] object-contain"
                />

                <div className="flex space-x-4 ">
                  <div className="space-y-[0.15rem] ">
                    <p className="text-[2.1rem] font-sans font-[600] text-left  tracking-normal leading-[2rem] text-[#333333]">Indian Office</p>
                  </div>
                </div>
                <div className="flex space-x-4 justify-center mt-[1rem] ">
                  <p className=" text-[.875rem] text-left font-sans font-[400]  tracking-normal leading-[1.5rem] text-[#333333]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="mt-[-11rem] space-y-6">

                <img
                  src={Office.src}
                  alt="Sandeep Nailwal"
                  className="w-[24rem] h-[21rem] object-contain"
                />

                <div className="space-y-[0.15rem] ">
                  <p className="text-[2.1rem] font-sans font-[600] text-left  tracking-normal leading-[2rem] text-[#333333]">Germany Office</p>
                </div>

                <div className="flex space-x-4 justify-center mt-[1rem] ">
                  <p className=" text-[.875rem] text-left font-sans font-[400]  tracking-normal leading-[1.5rem] text-[#333333]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

            </div>


          </div>
          <div className="space-y-[1.5rem]  w-2/5 mt-[0rem] ">
            <p className="font-Open-Sans text-[#01A4EF] text-right font-[600] mt-[5rem]  text-[3.75rem] tracking-normal leading-[5.86rem]">
              Our Collaboration Spaces
            </p>
            <p className="font-lettera-regular text-[#333333] font-[400] text-[1.2rem] text-right tracking-normal leading-[2rem] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

export default Fold23;