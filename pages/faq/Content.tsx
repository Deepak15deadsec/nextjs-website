import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";


const faq = [
  {
    question: "Is AVNI safe?",
    answer:
      "AVNI is one of the safest browsers on the market today. It blocks privacy-invasive ads & trackers. It blocks third-party data storage. It protects from browser fingerprinting. It upgrades every webpage possible to secure https connections. And it does all this by default. It’s also built off the open-source Chromium Web core, which powers browsers used by billions of people worldwide. This source code is arguably vetted by more security researchers than any other browser. In short, not only is Brave safe to use, it’s much safer than almost any other browser. Learn more.",
  },
  {
    question: "How do I download & install AVNI?",
    answer:
      "We puts users first, and that means sharing any ad revenue we generate directly with users. A full 60% of the revenue we earns through these advetising, privacy-preserving ads is shared directly back with users as Avni Rewards.",
  },
  {
    question: "Does AVNI have a VPN?",
    answer:
      "We puts users first, and that means sharing any ad revenue we generate directly with users. A full 60% of the revenue we earns through these advetising, privacy-preserving ads is shared directly back with users as Avni Rewards.",
  },
  {
    question: "What languages is AVNI available in?",
    answer:
      "We puts users first, and that means sharing any ad revenue we generate directly with users. A full 60% of the revenue we earns through these advetising, privacy-preserving ads is shared directly back with users as Avni Rewards.",
  },
  {
    question: "Who owns AVNI?",
    answer:
      "We puts users first, and that means sharing any ad revenue we generate directly with users. A full 60% of the revenue we earns through these advetising, privacy-preserving ads is shared directly back with users as Avni Rewards.",
  },
  {
    question: "Is AVNI open source?",
    answer:
      "We puts users first, and that means sharing any ad revenue we generate directly with users. A full 60% of the revenue we earns through these advetising, privacy-preserving ads is shared directly back with users as Avni Rewards.",
  }
];

const Content = () => {
  return (
    <div className="xl:px-[22rem] bg-[#3bdfce] lg:px-[14rem] md:px-[4rem] px-[2rem] mb-[6.25rem]">
      <h1 className="text-[#6348c7] font-semibold text-[3.75rem] pt-[5rem] leading-[80px] -mt-4">Frequently Asked Questions</h1>

      <div className="mt-[1.875rem] space-y-6">
        {faq.map((data, index) => {
          return (
            <div
              key={index}
              className=" mx-auto w-full selection:bg-white border-b-2 py-4"
            >
              <Disclosure>
                {({ open }: any) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  text-left items-center">
                      <span className="font-semibold text-[2.8rem]  text-[#ffffff] leading-[50px]">{data.question}</span>
                      <FaChevronUp
                        className={`${open ? "rotate-180 transform" : ""
                          } h-5 w-5  text-[#333333]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-4 font-[400] text-[1.4rem] leading-[1.8rem] text-[#312f2f]">
                      {data.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
