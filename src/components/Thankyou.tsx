import React from "react";
import { useRouter } from "next/router";

const Thankyou = () => {
  const router = useRouter();
  return (
    <div className="bg-white w-full min-h-[90vh] flex justify-center items-center ">
      <div className="max-w-md mx-auto shadow-lg rounded-lg text-lg font-semibold relative p-5 text-left bg-gray-50 border-b border-b-[#ededed] text-black">
        <div
          onClick={() => router.push("/")}
          className="absolute right-2 top-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold text-green-600">Thank You !</h1>
          <p className="text-base font-normal">
            You will receive a quote from our specialists soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
