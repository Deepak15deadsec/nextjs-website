import Head from "next/head";
// import Group from "../public/images/Mask-group.webp";
import Group from "../public/images/partners.png";
import { Fold1, Fold2, Fold4, Fold6, Fold8, Fold9, Chair, Money, Earn } from "../src/components/main"
import Image from "next/image";
import GreenCard from "../src/components/GreenCard";
import Logo from '../public/images/google.svg';
import useStore from "../zustand/useStore";
import { useEffect } from 'react'

export default function Home() {
  
  const updateReferror = useStore((state) => state.updateReferrer)
  useEffect(() => {
    updateReferror("")
  }, [])

  return (
    <div>
      <Head>
        <title>avni</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#ffffff] overflow-hidden">
        <Fold1 />
        <Chair />
        {/* <Earn /> */}
        <Fold2 />
        <Money />
        {/* <Fold4 /> */}
        <div className="mt-[0rem] bg-[#F5F5F5] from-[#4BA173] to-[#80CF9C]">

          <Image
            height={844}
            width={1920}
            src={Group.src}
            alt="Avni Hero"
            className="ipad:block xs:hidden w-full xs:h-full lg:h-844 xl:h-123 object-cover"
          />
        </div>
        <Fold6 />
        <Fold8 />
        <div className="my-[5rem]">
          <GreenCard src={Logo.src} content={<p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">Sound too good to be true? Here’s the deal: Stores wants you to transact at their stores via <br /> offers and promotions we provide. we use the advertising revenue as Cash Back in Token.<br /> Everyone wins</p>} />

        </div>
        {/* <Fold9 /> */}
      </main>
    </div>
  );
}