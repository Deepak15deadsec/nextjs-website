import React from 'react'
import { Fold51 } from "../../src/components/ambassador"
import { Fold52 } from "../../src/components/ambassador"
import { Fold53 } from "../../src/components/ambassador"
import { Fold54 } from "../../src/components/ambassador"
import { Fold55 } from "../../src/components/ambassador"
import { Fold56 } from "../../src/components/ambassador"
import { Fold57 } from "../../src/components/ambassador"
import { Fold58 } from "../../src/components/ambassador"
import { Fold9 } from "../../src/components/main"
import Header from "../../src/components/header"
import Head from 'next/head'
import GreenCard from '../../src/components/GreenCard'
import Logo from '../../public/images/google.svg';
import Mobile from '../../src/components/mobheader'

const Ambassador = () => {
  return (
    <div className='mt-[0rem]'>
      <Head>
        <title>Ambassador</title>
        <meta name="description" content="Avni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#Ffffff] mt-[0rem]">
      <div className="lg:flex md:flex hidden">
          <Header />
        </div>
        <div className="lg:hidden md:hidden flex">
          <Mobile />
        </div>
        { <Fold51 /> }
        { <Fold52 /> }
        { <Fold53 /> }
        { <Fold54 /> }
      {/*  { <Fold55 /> }*/}
        {/* { <Fold56 /> } */}
        {/* { <Fold57 /> } */}
        {/* { <Fold58 /> } */}
        <div className="my-[5rem]">
          <GreenCard src={Logo.src} content={<p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">Sound too good to be true? Here’s the deal: Stores wants you to transact at their stores via <br /> offers and promotions we provide. we use the advertising revenue as Cash Back in Token.<br /> Everyone wins</p>} />
        </div>
        {/* <Fold9 /> */}
      </main>
    </div>

  )
}

export default Ambassador;