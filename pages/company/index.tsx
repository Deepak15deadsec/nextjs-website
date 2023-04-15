import React from 'react'
import { Fold21, Fold22, Fold23, Fold24, Fold25 } from "../../src/components/company"
import { Fold9 } from "../../src/components/main"
import Head from 'next/head'
import Header from '../../src/components/header'
import Mobile from '../../src/components/mobheader'

const Company = () => {
    return (
        <div className='pt-[7rem]'>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Avni" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[#ffffff]">
            <div className="lg:flex md:flex hidden">
          <Header />
        </div>
        <div className="lg:hidden md:hidden flex">
          <Mobile />
        </div>
                <div className='-mt-[8.5rem]'>
                    <Fold21 />
                </div>

                <Fold22 />
                {/* <Fold23 /> */}
                <Fold24 />
                <Fold25 />
                {/* <Fold9 /> */}

            </main>
        </div>

    )
}

export default Company;