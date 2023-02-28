import React from 'react'
import { Fold41 } from "../../src/components/contactus"
import Head from 'next/head'
import { Fold9 } from "../../src/components/main"
import GreenCard from '../../src/components/GreenCard'
import Logo from '../../public/images/google.svg';

const Contactus = () => {
    return (

        <div className='pt-[5rem]'>

            <Head>
                <title>Contact</title>
                <meta name="description" content="Avni" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[#FFFFFF]">

                <Fold41 />
                <GreenCard
            src={Logo.src}
            content={
              <p className="text-[1rem]  font-[400] text-center  leading-[1.5rem] text-[#333333]">
                Sound too good to be true? Here’s the deal: Stores wants you to
                transact at their stores via <br /> offers and promotions we
                provide. we use the advertising revenue as Cash Back in Token.
                <br /> Everyone wins
              </p>
            }
          />

                <Fold9 />

            </main>
        </div>
    )
}

export default Contactus;