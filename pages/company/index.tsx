import React from 'react'
import { Fold21, Fold22, Fold23, Fold24, Fold25 } from "../../src/components/company"
import { Fold9 } from "../../src/components/main"
import Head from 'next/head'

const Company = () => {
    return (
        <div className='pt-[7rem]'>
            <Head>
                <title>Company</title>
                <meta name="description" content="Avni" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[#F5F5F5]">

                <div className='-mt-[5rem]'>
                    <Fold21 />
                </div>

                <Fold22 />
                {/* <Fold23 /> */}
                <Fold24 />
                <Fold25 />
                <Fold9 />

            </main>
        </div>

    )
}

export default Company;