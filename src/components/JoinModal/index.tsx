import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import countries from "../../../lib/countries.json"
import CountryCode from "../dropdowns/CountryDropdown"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../google";
import axios from "axios";

const JoinModal = (props: any) => {
    const [country, setCountry] = useState(countries[0])
    const [value, setValue] = useState("")
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null)
    const [step, setStep] = useState(1)
    let currentOTPIndex: number = 0;
    const router = useRouter()
    const { googleUrl } = useGetGoogleOAuthURL()

    const handleOnChange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOTP: string[] = [...otp]
        newOTP[currentOTPIndex] = value.substring(value.length - 1);

        if (!value) setActiveOTPIndex(currentOTPIndex - 1);
        else setActiveOTPIndex(currentOTPIndex + 1);

        setOtp(newOTP)

    };

    const handleOnKeyDown = (
        { key }: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        currentOTPIndex = index;
        if (key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
    };


    useEffect(() => {
        inputRef.current?.focus()
    }, [activeOTPIndex])


    const goNext = async () => {
        //api for otp 
       const res = await axios({
            url: `https://2factor.in/API/V1/6961d34a-7b2f-11eb-a9bc-0200cd936042/SMS/+91${value}/AUTOGEN/OTP1`,
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })

        if(res && res.status){
            setStep(2)
        } 
    }

    const otpVerify = async() => {
        //api verify otp api call

        console.log("otp", otp)
       

        const res = await axios({
            url:`https://2factor.in/API/V1/6961d34a-7b2f-11eb-a9bc-0200cd936042/SMS/VERIFY3/${value}/${otp.join('')}`,
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })

        if(res && res.status){
            setStep(2)
        } 

        setStep(3)

    }

    const google = async () => {
        await router.push(googleUrl);
    };


    const renderDialog = () => {
        switch (step) {
            case 1:
                return (
                    <div className="flex flex-col space-y-12 px-[3rem]">
                        <Dialog.Title
                            className="text-[#333333] text-[3rem]  font-[600]"
                        >
                            enter your phone number to get the link via SMS
                        </Dialog.Title >

                        <div className="bg-gray-50 border border-gray-300  inline-flex rounded-[3rem] space-x-6 h-12   ">
                            <CountryCode
                                country={country}
                                setCountry={setCountry}
                                countries={countries} />
                            <input
                                className="  text-gray-900 text-[3rem] font-[600] focus:outline-none w-[50%]"
                                type="tel"
                                onChange={(e: any) => setValue(e.target.value)}
                                value={value}
                                maxLength={10}
                                placeholder="_ _ _ _ _ _ _ _ _ _"
                            />
                        </div>

                        <button
                            type="button"
                            disabled={value.length < 10 ? true : false}
                            className={`${value.length == 10 ? "bg-blue-100" : "bg-black opacity-60"} w-72 mx-auto inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-[1.5rem] font-medium text-blue-900  focus:outline-none  `}
                            onClick={goNext}
                        >
                            Submit
                        </button>

                    </div>
                )
            case 2:
                return (
                    <div>
                        <Dialog.Title
                            className="text-[#333333] mt-[3rem] text-[3rem] px-[3rem] w-[50%] font-[600] leading-[3rem]"
                        >
                            Enter your otp
                        </Dialog.Title >
                        <div className="flex w-full space-x-5 px-[3rem] mt-[4rem]">
                            {otp.map((_, index) => {
                                return (
                                    <Fragment key={index}>
                                        <input
                                            ref={index === activeOTPIndex ? inputRef : null}
                                            type="text"
                                            onChange={handleOnChange}
                                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                                            value={otp[index]}
                                            className="w-full border border-black rounded-lg text-center font-600 text-[5rem]  opacity-60"
                                        />
                                    </Fragment>
                                )
                            })}
                        </div>
                        <div className="mt-[4rem] px-[3rem] flex justify-end space-x-[0.5rem]">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-[1.5rem] font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={otpVerify}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <button
                        onClick={google}
                        className="h-[4rem]  flex justify-center items-center text-white shadow-lg  font-[400] text-[1.5rem]  leading-[3rem]"
                    >
                        <div className="bg-white h-full flex justify-center items-center px-2 rounded-l">
                            <FcGoogle size={50} />
                        </div>
                        <div className="h-full flex justify-center items-center bg-blue-500 px-2 rounded-r">
                            <p>Sign in with Google</p>
                        </div>
                    </button>
                )

            default:
                return (<></>)
        }
    }



    return (
        <div className="absolute inset-0">
            <Transition appear show={props?.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {
                    setStep(1)
                    props?.onClose()
                    setOtp(new Array(6).fill(""))
                    setValue("")
                }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[130vh] h-[62vh] flex justify-center items-center  transform  rounded-[5rem] bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {renderDialog()}
                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}





export default JoinModal