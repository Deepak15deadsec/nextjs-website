import React from "react";
import { useGetGoogleOAuthURL } from "../../../google";
import { useRouter } from "next/router";
import Image from "next/image";
import Cardx from "./Cardx";
import Sr from "../../../../public/images/reward.png";
import Er from "../../../../public/images/receipt.png";
import If from "../../../../public/images/add-group.png";
import Od from "../../../../public/images/tap.png";

const index = () => {
  const router = useRouter();
  const { googleUrl } = useGetGoogleOAuthURL()
  const google = async () => {
    await router.push(googleUrl);
  };
  return (
    <div className="w-full  mt-[-8rem] bg-[url('/images/trust-bg.webp')]">
      <div className="my-[5rem] xl:px-[22rem] lg:px-[7rem] md:px-[4rem] px-[3rem] flex justify-between">
        <div className="w-[1/2] space-y-[1rem] mb-[4rem] mt-[4rem]">
          <div className="flex justify-start  items-left">


            <div className="grid grid-rows-8 grid-cols-1  mt-[3rem] mb-[4rem]">
            <button className="rounded-[3.5rem] text-[#ffffff] px-3 py-5 text-[2rem] border-4 border-[#ffffff]">
             Sign up to Collect 50 $ART Tokens </button>
                
             <div className="ml-[10rem]" 
              style={{ display: "flex",  width: "20px", height: "20px", backgroundColor: "#087c54", borderRadius: "50%",borderColor: 'white', borderWidth: '6px'  }}></div>
             <div className="ml-[8.75rem] mt-[1.7rem]">
                <hr 
                    style={{
                        background: '#ffffff',
                        color: '#ffffff',
                        borderColor: '#ffffff',
                        height: '4px',
                        width: '60px',
                        transform: 'rotate(90deg)',
                        }}></hr>   </div>

                        <div className="ml-[10rem] mt-[1.7rem]" 
                  style={{ display: "flex",  width: "20px", height: "20px", backgroundColor: "#087c54", borderRadius: "50%",borderColor: 'white', borderWidth: '6px'  }}></div>
             
             <button className="rounded-[3.5rem] text-[#ffffff] px-3 py-5 text-[2rem] border-4 border-[#ffffff]" >
             Collect up to 200 $ART Tokens for Opt-in Data </button>

             <div className="ml-[10rem]" 
                  style={{ display: "flex",  width: "20px", height: "20px", backgroundColor: "#087c54", borderRadius: "50%",borderColor: 'white', borderWidth: '6px'  }}></div>
                <div className="ml-[8.75rem] mt-[1.7rem]">
                <hr 
                    style={{
                        background: '#ffffff',
                        color: '#ffffff',
                        borderColor: '#ffffff',
                        height: '4px',
                        width: '60px',
                        transform: 'rotate(90deg)'
                        }}></hr>   </div>
                <div className="ml-[10rem] mt-[1.7rem]" 
                  style={{ display: "flex",  width: "20px", height: "20px", backgroundColor: "#087c54", borderRadius: "50%",borderColor: 'white', borderWidth: '6px'  }}></div>        
                        <button className="rounded-[3.5rem] text-[#ffffff] px-3 py-5 text-[2rem] border-4 border-[#ffffff]">
                        Collect 50 $ART Tokens for Referrals</button>

                        <div className="ml-[10rem]" 
                  style={{ display: "flex",  width: "20px", height: "20px", backgroundColor: "#087c54", borderRadius: "50%",borderColor: 'white', borderWidth: '6px'  }}></div>        
                <div className="ml-[8.75rem] mt-[1.7rem] mb-[1.7rem]">
                <hr 
                    style={{
                        background: '#ffffff',
                        color: '#ffffff',
                        borderColor: '#ffffff',
                        height: '4px',
                        width: '60px',
                        transform: 'rotate(90deg)'
                        }}></hr>   </div>
                <div className="ml-[10rem]" 
                  style={{ display: "flex",  width: "20px", height: "20px", backgroundColor: "#087c54", borderRadius: "50%",borderColor: 'white', borderWidth: '6px'  }}></div>        
                        <button className="rounded-[3.5rem] text-[#ffffff] px-3 py-5 text-[2rem] border-4 border-[#ffffff]">
                        Collect 2 $ART Tokens for every shopping receipt</button>
               
                
            </div>

          </div>



        </div>
        
        <div className="  mb-[4rem] w-[44%] xl:mt-[5rem] lg:mt-[4rem] justify-right ">
          <p className="text-right font-[800] lg:mt-[3rem] md:mt-[15rem] mt-[38rem] xl:text-[9em] lg:text-[9rem] lg:leading-[8.5rem] xl:leading-[8.5rem] md:text-[4rem] md:leading-[4.2rem] text-[2rem] text-[#FFFFFF]">
          Earn from your data
          </p>
          
          <p className="text-right font-[500] mt-[2rem] md:mt-[4rem] lg:text-[3.6rem] lg:leading-[4rem] md:text-[2rem] md:leading-[2.5rem] text-[#FFFFFF]">
          Sounds too good to be true?

          </p>
          <p className="text-right font-[400] md:pt-[4rem] pt-[1rem] lg:text-[1.75rem] lg:leading-[2.5rem] md:text-[1.2rem] md:leading-[1.8rem] text-[#FFFFFF]">
          We bring brand offers truly personalized! <br/> Every time you accept one, we share a portion of advertising revenue as $ART token.
          </p>
        </div>
      </div>

    </div>
  );
};

export default index;
