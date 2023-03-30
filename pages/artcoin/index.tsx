import React from 'react'
import { Fold11, Fold12, Fold13, Fold14, Fold15, Coin, System } from "../../src/components/artcoin"
import { Fold9 } from "../../src/components/main"
import Head from 'next/head'
import GreenCard from '../../src/components/GreenCard'
import Logo from '../../public/images/google.svg';

const Artcoin = () => {
  return (
    <div className='mt-[0rem]'>
      <Head>
        <title>Artcoin</title>
        <meta name="description" content="Avni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#ffffff]">

        <Coin />
        {/* <Fold11 /> */}
        {/* <Fold12 />
        <Fold13 /> */}
        {/* <Fold14 /> 
        <System />
        <Fold15 />*/}
        <div className="my-[5rem]">
          <GreenCard src={Logo.src} content={<p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">Sound too good to be true? Here’s the deal: Stores wants you to transact at their stores via <br /> offers and promotions we provide. we use the advertising revenue as Cash Back in Token.<br /> Everyone wins</p>} />
        </div>
        {/* <Fold9 /> */}
      </main>
    </div>

  )
}

export default Artcoin;