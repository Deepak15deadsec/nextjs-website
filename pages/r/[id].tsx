import Head from "next/head";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import useStore from "../../zustand/useStore";
// import Group from "../../public/images/Mask-group.png";
import Group from "../../public/images/partners.png";
import { Chair, Earn, Fold1, Fold2, Fold4, Fold6, Fold8, Fold9, Money} from "../../src/components/main"
import Image from "next/image"
import GreenCard from "../../src/components/GreenCard";
import Logo from '../../public/images/google.svg';
import {usePathname } from 'next/navigation';

// export async function getServerPaths() {
//   try {
//     // let allReferralCode: any = [{ referralCode: "46546757" }];
//     const { data: allReferralCode = [] } = await axios({
//       method: "GET",
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/getAllReferralCode`,
//       headers: {
//         "Content-Type": "application/json",
//       }
//     });

//     return {
//       paths: allReferralCode,
//       fallback: false,
//     };
//   } catch (error) { }
// }

// export async function getStaticProps({ params }: any) {
//   return {
//     props: {},
//   };
// }

export default function Home() {

  const pathName = usePathname()


  const updateReferrer = useStore((state: any) => state.updateReferrer);

  useEffect(() => {
    updateReferrer(pathName?.replace(/[/r/]/g, ''));
  }, [pathName]);

  return (
    <div>
      <Head>
        <title>Avni</title>
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

