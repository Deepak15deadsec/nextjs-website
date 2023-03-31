import React from "react";


const Cardy = ({ img, title1, title2 }: { img: string, title1: string, title2: string }) => {
  return (
    <div className="rounded-[1.75rem]  px-[1.5rem] space-y-2 space-x-3 lg:w-[60rem] flex text-left">

      {/* <div className=" mt-[1rem] items-center">
        <img
          src={img}
          height="70rem"
          width="70rem"
          alt=""
          className=" object-contain"
        />

      </div> */}

      <div>

        <p className="text-[2rem] mb-[0.5rem] font-[600]  tracking-normal leading-[2.2rem] text-[#ffffff]">{title1}</p>

        <hr
          style={{
            borderRadius: '50%',
            background: '#ffffff',
            color: '#ffffff',
            borderColor: '#ffffff',
            height: '4px',
            width: '240px'
          }}></hr>

        <div className="flex space-x-2">
          <img
            src={img}
            height="30rem"
            width="30rem"
            alt=""
            className="-mt-[1.5rem] object-contain"
          />
          <p className=" text-[1.4rem] mt-[0.5rem] font-[400] text-left tracking-normal pb-[2rem] leading-[2rem] text-[#ffffff]">
            {title2}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Cardy;