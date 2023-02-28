import React from "react";

const Card = ({ span, title, content, url }: any) => {
  return (
    <div
      className={`bg-[#191919] rounded-[0.625rem] shadow-[5px_18px_35.1px_0px_rgba(0,0,0,0.07)] flex flex-col justify-between ${span}`}
    >
      <div className="p-8 space-y-4">
        <p className="text-[1.75rem] font-lettera-bold font-[700]  tracking-normal leading-[2rem] text-white">{title}</p>
        <p className="text-[1.375rem] font-lettera-regular font-[400] tracking-normal leading-[2rem] text-[#b3b3b3]">
          {content}
        </p>
      </div>

      <img
        src={url}
        alt="Free ATM Access"
        height="32px"
        width="26px"
        className="h-auto w-auto object-contain object-right-bottom rounded-[0.625rem]"
      />
    </div>
  );
};

export default Card;
