import React from "react";

const RightCard = ({ url, title, content }: any) => {
  return (
    <div className="flex justify-start space-x-[4rem] items-center mt-[10rem]">
      <div className="space-y-2 w-[42%]">
        <p className="font-lettera-bold font-[700] text-[4rem] tracking-normal leading-[4rem] text-white">
          {title}
        </p>
        <p className="font-lettera-regular font-[400] text-[1.5rem] tracking-normal leading-[2rem] text-white">
          {content}
        </p>
      </div>
      <img
        src={url}
        alt="juno-benefits"
        className="ipad:w-full xs:w-77 object-contain"
      />
    </div>
  );
};

export default RightCard;
