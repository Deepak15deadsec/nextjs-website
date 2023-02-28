import React from "react";
import Card from "./Card";

const cards = [
  {title:"Free ATM Access", content:"80K+ fee-free ATMs at locations like Walgreens, 7-Eleven, CVS, and more", url:"https://cdn.juno.finance/crypto-landing/free-atm-1.png", span:""},
  {title:"FDIC Insured", content:"USD cash balances are covered by FDIC insurance up to $250,000", url:"https://cdn.juno.finance/crypto-landing/fdic-insured-1.png", span:""},
  {title:"Bank Transfers", content:"ACH & Wire Transfers, Direct Deposit, Bill Payments", url:"https://cdn.juno.finance/crypto-landing/bank-transfer-1.png", span:""},
  {title:"Say no to fees", content:<span>No minimum balance, No monthly <br/> Fees, No overdraft fees</span>, url:"https://cdn.juno.finance/crypto-landing/no-fees-bg-1.png", span:"col-span-2"},
  {title:"Tax Compliant", content:"Automated tax reporting through form 1099 for cash and crypto earnings", url:"https://cdn.juno.finance/crypto-landing/tax-compliant-1.png", span:""}
]

const index = () => {
  return (
    <div className="mt-[8rem] flex flex-col justify-center items-center px-[12rem]">
      <p className="text-[4.5rem] font-lettera-bold font-[700] text-center tracking-normal leading-[4rem] text-white">
        A complete bank <br/> replacement
      </p>

      <div className="grid xs:grid-cols-1 grid-cols-3 gap-3 mt-[3rem]">
        {cards.map(({url, title, content, span}, index:number)=><Card key={index} url={url} title={title} content={content} span={span}/>)}
        
      </div>
    </div>
  );
};

export default index;
