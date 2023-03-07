import React from 'react'
import { Fold11 } from "../../src/components/ambassador"
import { Fold12 } from "../../src/components/ambassador"
import { Fold13 } from "../../src/components/ambassador"
import { Fold9 } from "../../src/components/main"
import Head from 'next/head'
import GreenCard from '../../src/components/GreenCard'
import Logo from '../../public/images/google.svg';

const Ambassador = () => {
  return (
    <div className='mt-[0rem]'>
      <Head>
        <title>Ambassador</title>
        <meta name="description" content="Avni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#F5F5F8] mt-[0rem]">

        { <Fold11 /> }
        { <Fold12 /> }
        { <Fold13 /> }
        <div className="mt-[5rem]">
          <GreenCard src={Logo.src} content={<p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">Sound too good to be true? Here’s the deal: Stores wants you to transact at their stores via <br /> offers and promotions we provide. we use the advertising revenue as Cash Back in Token.<br /> Everyone wins</p>} />
        </div>
        <Fold9 />
      </main>
    </div>

  )
}

export default Ambassador;