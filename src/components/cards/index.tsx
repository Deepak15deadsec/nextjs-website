import React from "react";

const Card = ({
  url,
  title,
  content,
}: {
  url: string;
  title: string;
  content: any;
}) => {
  
  return (
    <div className="rounded-[0.75rem] shadow-lg border-2 border-[#a39eff4d] w-[44rem] h-[28rem]">
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="w-full h-full p-[1.5rem] bg-cover space-y-[1rem]"
      >
        <p className="font-lettera-black font-[900] text-[2.25rem] tracking-normal leading-[2.33rem] text-white">
          {title}
        </p>

        <p className="font-lettera-regular font-[400] text-[1.125rem] tracking-normal leading-[1.25rem] text-[#b3b3b3]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
