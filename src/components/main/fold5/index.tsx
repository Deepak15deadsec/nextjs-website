import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

const cards = [
  {title:"Convert your token to Gift cards easily", content:"You can convert your tokens to gift card from our 5000+ partner stores", url:"https://cdn.juno.finance/juno-main-landing/cash-to-crypto.png", side:"left"},
  // {title:"Bridge to Layer 2 seamlessly", content:"Withdraw ETH and USDC to Arbitrum, Polygon and Optimism from a checking account", url:"https://cdn.juno.finance/juno-main-landing/bridge-to-l2.png", side:"right"},
  // {title:"Invest with every paycheck", content:"Automatically invest part of every paycheck in crypto and dollar cost average", url:"https://cdn.juno.finance/juno-main-landing/invest-with-paycheck.png", side:"left"},
]

const index = () => {
  return (
    <div className="mt-[10rem] px-[10rem]">
      <p className="text-[7rem] font-lettera-bold font-[700] tracking-normal leading-[7rem] text-white">Rewarding  that's <br/> built for you</p>
       {cards.map(({title, content, url, side}:{title:string, content:string, url:string, side:string})=>{
        if(side === 'left'){
          return <LeftCard title={title} content={content} url={url} key={title}/>
        }else{
          return <RightCard title={title} content={content} url={url} key={title}/>
        }
       })}
    </div>
  )
}

export default index