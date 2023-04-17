import { Fragment, useState, useRef, useEffect, Children } from "react";
// import { Dialog, Transition } from '@headlessui/react'
// import countries from "../../../lib/countries.json"
import countries from "../../../lib/countryflag.json"
import CountryCode from "../dropdowns/CountryDropdown"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useGetGoogleOAuthURL } from "../../google";
import axios from "axios";
import useStore from "../../../zustand/useStore";
import { enc, AES } from 'crypto-js';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { render } from "@headlessui/react/dist/utils/render";

let currentOTPIndex: number = 0;
const JoinModal = (props: any) => {
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

        console.log("phone", `${country.dial_code}${value}`)

    }

    const google = async () => {
        await router.push(googleUrl);
    };


    const renderDialog = () => {
        switch (step) {
            case 1:
                return (

                    <div className="flex z-[10000] p-12 flex-col space-y-12 ">
                        <Dialog.Title
                            className="text-[#333333] text-[3rem]  font-[600]"
                        >
                            enter your phone number to join
                        </Dialog.Title >

                        <div className="bg-white border border-gray-400 pr-10 py-0 inline-flex rounded-[3rem]  space-x-6 h-18   ">
                            <CountryCode
                                country={country}
                                setCountry={setCountry}
                                countries={countries} />
                            <input
                                className="  text-gray-900 text-[3rem]  font-[600] focus:outline-none "
                                type="tel"
                                onChange={(e: any) => setValue(e.target.value)}
                                value={value}
                                maxLength={10}
                                placeholder=""
                            />


                        </div>

                        <div className=" flex justify-end  space-x-[0.5rem]">
                            <button
                                type="button"
                                disabled={value.length < 10 ? true : false}
                                onClick={goNext}
                                className={`"inline-flex justify-center rounded-md border border-transparent ${value.length == 10 ? "cursor-pointer bg-[#57CC99] hover:bg-[#44df9c]" : " bg-[#cccccc]"} px-4 py-2 text-[1.5rem] font-medium text-white hover:bg-[#2bd88d] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "`}
                            >
                                Send
                            </button>
                        </div>


                    </div>
                )
            case 2:
                return (
                    <div className="z-[10000] p-12 flex-col space-y-12 ">
                        <Dialog.Title
                            className="text-[#333333]  text-[3rem]  w-[50%] font-[600] leading-[3rem]"
                        >
                            Enter your otp
                        </Dialog.Title >
                        <div className="flex w-full space-x-5 ">
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

                        <div className=" flex justify-between space-x-[0.5rem]">
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
                                    className={`inline-flex justify-center rounded-md border border-transparent bg-[#cccccc] ${isDisabled ? "bg-[#cccccc] " : "bg-[#cccccc] hover:bg-[#c2b6b6]"} px-4 py-2 text-[1.5rem] font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                    onClick={goNext}
                                    disabled={isDisabled}
                                >
                                    {isDisabled ? `Reset OTP ${timer}s` : 'Reset OTP'}

                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-[#57CC99] px-4 py-2 text-[1.5rem] font-medium text-white hover:bg-[#2bd88d] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                    <div className="z-[10000] p-12 flex-col space-y-12">
                        <Dialog.Title
                            className="text-[#333333]  text-[3rem] font-[600] leading-[3rem]"
                        >
                            invite code
                        </Dialog.Title >
                        <div className="flex w-full space-x-5  ">

                            <input
                                className="  text-gray-900 text-[3rem] w-[40rem] border-2 px-2 font-semibold rounded-lg focus:outline-none "
                                type="tel"
                                value={referrer}
                                onChange={(e) => setReferrer(e.target.value)}
                                maxLength={10}
                                placeholder=""
                            />
                        </div>
                        <div className="  flex justify-end space-x-[0.5rem]">
                            {referrer.length == 0 && (
                                <button
                                    type="button"
                                    className={`inline-flex justify-center rounded-md border border-transparent  ${referrer.length < 0 ? "bg-[#57CC99] hover:bg-[#2bd88d]" : "bg-[#57CC99] hover:bg-[#2bd88d]"} px-4 py-2 text-[1.5rem] font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                    onClick={skipInvite}

                                >
                                    Skip
                                </button>
                            )}
                            <button
                                type="button"
                                className={`inline-flex justify-center rounded-md border border-transparent ${referrer.length > 0 ? "bg-[#57CC99] hover:bg-[#2bd88d]" : "bg-[#f0e5e5]"}  px-4 py-2 text-[1.5rem] font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                onClick={verifyInvite}
                                disabled={referrer.length < 1}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                )
            default:
                return (<>
                   
                        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                            Edit profile
                        </Dialog.Title>
                        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                            Make changes to your profile here. Click save when you're done.
                        </Dialog.Description>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                id="name"
                                defaultValue="Pedro Duarte"
                            />
                        </fieldset>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                id="username"
                                defaultValue="@peduarte"
                            />
                        </fieldset>
                        <div className="mt-[25px] flex justify-end">
                            <Dialog.Close asChild>
                                <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                                    Save changes
                                </button>
                            </Dialog.Close>
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                            >
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
  
                </>)
        }
    }



    return (




        <Dialog.Root>

            <Dialog.Trigger asChild>
              {props.children}

            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]   translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    {renderDialog()}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

    )
}





export default JoinModal