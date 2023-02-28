import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { BiChevronDown as ChevronDownIcon } from "react-icons/bi";

export default function Dropdown({ link, name }: { link: any; name: string}) {
  return (
    <Menu as="div"  className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1.33rem] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {name}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5  hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 py-4 space-y-4 w-40 text-center items-center bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {link.map(({ label, href }: any) => (
            <Menu.Item key={label}>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-black" : "text-[#767676]"
                  } group flex w-full  items-center text-sm px-[2rem] text-[#767676] font-lettera-medium font-[500] text-[1rem] tracking-normal leading-[1.33rem]`}
                >
                  {label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}


