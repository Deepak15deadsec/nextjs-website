import React from 'react'
import { Coin } from "../../src/components/advertiser"
import { Fold9 } from "../../src/components/main"
import Head from 'next/head'
import GreenCard from '../../src/components/GreenCard'
import Logo from '../../public/images/google.svg';
import Adheader from '../../src/components/adheader'

const Advertiser = () => {
  return (
    <div className='mt-[0rem]'>
      <Head>
        <title></title>
        <meta name="description" content="Avni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#ffffff]">
        <Adheader />
        <Coin />

      </main>
    </div>

  )
}

export default Advertiser;