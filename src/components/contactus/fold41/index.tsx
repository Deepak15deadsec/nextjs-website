import React, { useState } from "react";
import Logo from "../../../../public/images/google.svg";
import Person from "../../../../public/images/contactus.png";
import GreenCard from "../../GreenCard";
import Loading from "../../Loading";
import Thankyou from "../../Thankyou";
import axios from "axios";
import Image from "next/image";

interface Contact {
  email: string,
  name: string,
  message: string
}

const Fold41 = () => {
  const [nextScreen, setNextScreen] = useState<number>(1);
  const [input, setInput] = useState<Contact>({
    email: "",
    name: "",
    message: ""
  })

  const [errorState, setErrorState] = useState<any>({
    name: false,
    email: false,
    message: false
  });


  const validateField = (fieldType: string) => {
    switch (fieldType) {
      case "name":
        if (input["name"] === "") return true;
        else return false;

      case "email":
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            input["email"]
          )
        )
          return true;
        else return false;

      case "message":
        if (input["message"] === "") return true;
        else return false;

      default:
        return false;
    }
  };

  const onChangeHandler = (value: string, name: string) => {
    setInput({ ...input, [name]: value })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();

    let isValid = true;
    Object.keys(input).map((field: string) => {
      if (true) {
        let errorNew = validateField(field);
        setErrorState((prev: any) => ({ ...prev, [field]: errorNew }));
        if (errorNew) {
          isValid = false;
        }
      }
    });

    if (isValid) {
      setNextScreen(2)
      await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        data: input
      })
      setNextScreen(3)
    }


  };

  //lg:bg-none sm:bg-none md:bg-none bg-[url('/images/lperson.svg')] bg-no-repeat bg-[length:600px_900px]

  switch (nextScreen) {
    case 1:
      return (
        <div className=" bg-[#36454F] ">
          <div className="flex justify-between">
            <div className="w-[50%]">
              <div className="my-[5rem] w-full xl:px-[22rem] lg:px-[14rem]  flex justify-start ">
                <div className="space-y-[1.5rem]  mb-[4rem] mt-[2rem]">
                  <p className="text-[4.75rem]  font-sans font-[600] text-left tracking-normal leading-[4rem] text-[#FFFFFF]">
                    Contact Us
                  </p>
                  <p className="text-[1.5rem]  font-sans font-[400] text-left tracking-normal leading-[2rem] text-[#FFFFFF]">
                    Our friendly team would love to hear from you
                  </p>


                  <form onSubmit={onSubmit}>
                    <div className="grid gap-2 mb-6 md:grid-cols-1">
                      <div>
                        <label className="block mb-2 text-[1.5rem] font-[400] text-[#FFFFFF] ">
                          Name
                        </label>
                        <input
                          className={`${errorState["name"] && "bg-bgerror border-error"
                            } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-4`}
                          type="text"
                          onChange={(e) => onChangeHandler(e.target.value, "name")}
                          value={input.name}
                          placeholder="Enter your Name"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-[1.5rem] font-[400] text-[#FFFFFF]">
                          Email
                        </label>
                        <input
                          className={`${errorState["email"] && "bg-bgerror border-error"
                            } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-4`}
                          type="email"
                          onChange={(e) => onChangeHandler(e.target.value, "email")}
                          value={input.email}
                          placeholder="Enter your Email"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-[1.5rem] font-[400] text-[#FFFFFF] ">
                          Message
                        </label>
                        <textarea
                          className={`${errorState["message"] && "bg-bgerror border-error"
                            } block p-11 w-[30rem] h-[18rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 `}
                          onChange={(e) => onChangeHandler(e.target.value, "message")}
                          value={input.message}
                          placeholder="Write your query here..."
                        />
                      </div>

                      <button type="submit" className="rounded-[1rem] bg-[#57CC99] mt-[1rem] p-3 space-y-5 w-[30%] text-[1.5rem]  font-sans font-[700] text-center tracking-normal leading-[2rem] text-[#FFFFFF]">
                        Submit
                      </button>
                    </div>
                  </form>

                </div>


              </div>
            </div>

            <div className="w-[50%] ml-[10rem] mt-[8rem]">
              <img
                src={Person.src}
                alt="Fortune"
                height="464px"
                width="464px"
                className=" xs:h-10 ipadPro:h-10 object-contain v-lazy-image v-lazy-image-loaded"
              />
            </div>
          </div>





        </div>
      );

    case 2:
      return <Loading />;

    case 3:
      return <Thankyou />;

    default:
      return <Loading />;
  }
};

export default Fold41;
