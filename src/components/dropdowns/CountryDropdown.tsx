

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'



export default function CountryCode(props: any) {


    return (
        <div className="w-[150px] h-full">
            <Listbox value={props?.country} onChange={props?.setCountry}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-l-[3rem] border border-black  border-opacity-10 bg-transparent lg:h-20 md:h20 h-12 px-3 text-left  focus:outline-none lg:text-2xl md:text-2xl text-md">
                        <span className="block truncate">{props.country.dial_code}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-21 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                            {props?.countries.map((country: any, index: number) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-2 pr-2 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={country}
                                >
                                    {({ selected }) => (
                                        <>
                                            <div className='flex space-x-2'>
                                                <span
                                                    className={`block truncate ${selected ? 'lg:font-medium font-small' : 'lg:font-normal font-small'
                                                        }`}
                                                >
                                                    {country.flag}
                                                </span>
                                                <span
                                                    className={`block truncate ${selected ? 'lg:font-medium font-small' : 'lg:font-normal font-small'
                                                        }`}
                                                >
                                                    {country.name}
                                                </span>
                                            </div>


                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

