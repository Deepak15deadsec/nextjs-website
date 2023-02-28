import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

function MyDialog() {
  let [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      {isOpen && (
        <div className="w-full h-[3.25rem] bg-[#4BA173] flex justify-between items-center space-x-[2rem] px-[1rem] lg:px-[10rem]">
          <p className="text-left font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1.33rem]">
            <span>
              Get rewarded with $ART for being early adopters of web3.
            </span>
            <span className="self-center leading-tight"> Explore Quests </span>

            <FiArrowUpRight size={20} className="object-contain inline" />
          </p>
          <GrFormClose
            size={28}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>
      )}
    </>
  );
}
export default MyDialog;
