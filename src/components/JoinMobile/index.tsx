import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
// import countries from "../../../lib/countries.json"
import countries from "../../../lib/countryflag.json"
import CountryCode from "../dropdowns/CountryDropdown"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../google";
import axios from "axios";
import useStore from "../../../zustand/useStore";
import { enc, AES } from 'crypto-js';


let currentOTPIndex: number = 0;
const JoinMobile = (props: any) => {
    const [country, setCountry] = useState(countries[0])
    const [value, setValue] = useState("")
    const [referrer, setReferrer] = useState('');
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null)
    const [step, setStep] = useState(1)
    const router = useRouter()
    //const setPhone = useStore((state: any) => state.setPhone)
    const { googleUrl } = useGetGoogleOAuthURL()
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(30);
    const [error, setError] = useState({
        OTP: false
    })

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
        if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    };


    useEffect(() => {
        const storedData = localStorage.getItem('avni-storage');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setReferrer(parsedData.state.referrer);
        }
        inputRef.current?.focus()
    }, [activeOTPIndex])

    useEffect(() => {
        let intervalId: any;

        // Update timer every second
        if (isDisabled) {
            intervalId = setInterval(() => {

                setTimer(prevTimer => prevTimer - 1);
            }, 1000); // 1 second in milliseconds
        }

        // Clean up interval when component unmounts or button is enabled
        return () => {
            clearInterval(intervalId);
        };
    }, [isDisabled]);



    const goNext = async () => {
        try {

            var phoneCode = AES.encrypt(`${country.dial_code}${value}`, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY as string).toString();


            //api for otp
            const { data } = await axios({
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/oauth/requestOtp`,
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                data: JSON.stringify({
                    phoneCode: phoneCode
                })
            })

            if (data && data.Status === "Success") {
                setIsDisabled(true);

                // Enable the button after 30 seconds
                setTimeout(() => {
                    setIsDisabled(false);
                }, 30000);
                setTimer(30);
                setStep(2)
            }

        } catch (error) {
            console.log(error)
        }

    }

    const otpVerify = async () => {


        try {

            var phoneCode = AES.encrypt(`${country.dial_code}${value}`, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY as string).toString();
            var otpCode = AES.encrypt(`${otp.join('')}`, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY as string).toString();


            //api verify otp api call
            const { data } = await axios({
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/oauth/verifyOtp`,
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                data: JSON.stringify({
                    "phoneCode": phoneCode,
                    "otpCode": otpCode
                })
            })

            if (data && data.Status === "Error") {

                setError({
                    OTP: true
                })


            }
            else {


                if (data && data.status == 200) {

                    window.location.href = data.url;
                } else {
                    setStep(4)
                }
            }


        } catch (error) {
            console.log(error)
        }


    }

    const skipInvite = async () => {

        const { data: signup } = await axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/oauth/signup`,
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            data: JSON.stringify({
                "phone": `${country.dial_code}${value}`,
                "name": "Guest",
                "smsAccess": false,
                "locationAccess": false,
                "gender": "",
                "referrer": "",
                "age": null
            })
        })

        window.location.href = signup.url;



    }

    const verifyInvite = async () => {

        const { data: signup } = await axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/oauth/signup`,
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            data: JSON.stringify({
                "phone": `${country.dial_code}${value}`,
                "name": "Guest",
                "smsAccess": false,
                "locationAccess": false,
                "gender": "",
                "referrer": referrer,
                "age": null
            })
        })

        window.location.href = signup.url;

       

    }

    const google = async () => {
        await router.push(googleUrl);
    };


    const renderDialog = () => {
        switch (step) {
            case 1:
                return (
                    <div className="flex z-[10000] flex-col space-y-4 px-[5rem]">
                        <Dialog.Title
                            className="text-[#333333] text-[1rem] pl-[5rem] font-[600]"
                        >
                            enter your phone number to join
                        </Dialog.Title >

                        <div className="bg-white border border-gray-400  inline-flex rounded-[3rem] mx-[5rem] space-x-3 h-12   ">
                            <CountryCode
                                country={country}
                                setCountry={setCountry}
                                countries={countries} />
                            <input
                                className="  text-gray-900 text-[1rem]  font-[600] focus:outline-none "
                                type="tel"
                                onChange={(e: any) => setValue(e.target.value)}
                                value={value}
                                maxLength={10}
                                placeholder=""
                            />

                            <button
                                type="button"
                                disabled={value.length < 10 ? true : false}
                                onClick={goNext}
                            >
                                <img
                                    src={`${value.length == 10 ? "/images/mverify.png" : "/images/rverify.png"}`}
                                    alt=""
                                    className="h-[2rem] w-[2rem] mr-[2.5rem] object-contain"
                                />
                            </button>
                        </div>



                    </div>
                )
            case 2:
                return (
                    <div>
                        <Dialog.Title
                            className="text-[#333333] mt-[3rem] text-[1.5rem] px-[3rem]  font-[600] leading-[1.5rem]"
                        >
                            Enter your otp
                        </Dialog.Title >
                        <div className="flex w-full space-x-5 px-[3rem] mt-[1rem]">
                            {otp.map((_, index) => {
                                return (
                                    <Fragment key={index}>
                                        <input
                                            ref={index === activeOTPIndex ? inputRef : null}
                                            type="text"
                                            onChange={handleOnChange}
                                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                                            value={otp[index]}
                                            className="w-full border border-black rounded-lg text-center font-600 text-[1.5rem]  opacity-60"
                                        />
                                    </Fragment>
                                )
                            })}
                        </div>

                        <div className="mt-[1rem] px-[3rem] flex justify-between space-x-[0.5rem]">
                            <div>
                                {
                                    error.OTP && (
                                        <p className="text-red-500">Incorrect code, please enter the correct code.</p>
                                    )
                                }
                            </div>
                            <div className="space-x-2">
                                <button
                                    type="button"
                                    className={`inline-flex justify-center rounded-md border border-transparent bg-[#cccccc] ${isDisabled ? "bg-[#cccccc] " : "bg-[#cccccc] hover:bg-[#c2b6b6]"} px-4 py-2 text-[1rem] font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                    onClick={goNext}
                                    disabled={isDisabled}
                                >
                                    {isDisabled ? `Reset OTP ${timer}s` : 'Reset OTP'}

                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-[#57CC99] px-4 py-2 text-[1rem] font-medium text-white hover:bg-[#2bd88d] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={otpVerify}
                                >
                                    Verify
                                </button>
                            </div>

                        </div>
                    </div>
                )

            case 3:
                return (
                    <div>
                        <p>
                            Sign in with Google
                        </p>
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
                    </div>

                )

            case 4:
                return (
                    <div>
                        <Dialog.Title
                            className="text-[#333333] mt-[1rem] text-[1rem] font-[600] leading-[3rem]"
                        >
                            Invite Code
                        </Dialog.Title >
                        <div className="flex w-full space-x-5  mt-[1rem]">

                            <input
                                className="  text-gray-900 text-[1rem] border-2 px-2 font-[600] focus:outline-none "
                                type="tel"
                                value={referrer}
                                onChange={(e) => setReferrer(e.target.value)}
                                maxLength={10}
                                placeholder=""
                            />
                        </div>
                        <div className="mt-[1rem]  flex justify-end space-x-[0.5rem]">
                            {referrer.length == 0 && (
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-[#cccccc] px-4 py-2 text-[1rem] font-medium text-white hover:bg-[#c2b6b6] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={skipInvite}

                                >
                                    Skip
                                </button>
                            )}
                            <button
                                type="button"
                                className={`inline-flex justify-center rounded-md border border-transparent ${referrer.length > 0 ? "bg-[#57CC99] hover:bg-[#2bd88d]" : "bg-[#f0e5e5]"}  px-4 py-2 text-[1rem] font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                onClick={verifyInvite}
                                disabled={referrer.length < 1}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                )
            default:
                return (<></>)
        }
    }



    return (

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
                            <Dialog.Panel className="w-[70vh] h-[32vh] flex justify-center items-center  transform  rounded-[3rem] bg-white p-4 text-left align-middle shadow-xl transition-all">
                                {renderDialog()}
                            </Dialog.Panel>

                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}





export default JoinMobile