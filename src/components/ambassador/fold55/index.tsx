import React from "react";


const index = () => {
    const openInNewTab = (url: string | URL | undefined) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        
    }
    return (

        <div className="bg-[#38745c] pt-[5rem] pb-[5rem]">

            <div className="flex flex-col xl:px-[22rem] lg:px-[7rem] items-center justify-center  ">
                <div className="flex flex-col w-full space-y-[5rem] pt-[1rem] pb-[3rem]">
                    
                    <p className="ml-[2.5rem] text-center font-[500] text-[4.2rem] text-[#FFFFFF]">
                    Campus ambassador program

                    </p>
                    <hr 
                    style={{
                        borderRadius: '80%',
                        background: '#ffffff',
                        color: '#ffffff',
                        borderColor: '#ffffff',
                        height: '4px',
                        }}></hr>                   

                    <p className="text-center font-[200] text-[2.5rem] text-[#FFFFFF]">
                    Boost your resume by becoming a web3 ad-tech revolution advocate</p>

                    <p className="text-center font-[200] text-[2.4rem] text-[#FFFFFF]">
                    We aim to engage with and educate the next generation of passionate youngsters on starting a revolution in their campus by giving them the opportunity to become the face and voice of AVNI on campus</p>
                    
                    <p className="text-center font-[200] text-[2.4rem] text-[#FFFFFF]">
                    Your work as a campus ambassador for Avni will entail the following:</p>

                    <div className="text-left font-[100] lg:text-[2rem] px-[2rem] text-[#FFFFFF] style={{ display: 'inline', float: 'left' }}">
                    <ol style={{ listStyleType: 'disc' }}>
                    <li> Hosting & promoting avni events & campaigns in your campus</li>
                    <li> Introducing avni to college students & onboarding them to the platform</li>
                    <li>Amplifying avni’s brand content & message across social media platforms  </li>
                    <li>Establish a network to invite others to represent AVNI</li>
                    <li>Enjoying the whole program (most importantly!)</li></ol>
                    </div>
                    
                    

                   </div>

          
                   <button onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdRCS1T45mEvvgbY_-j0esPbXM4F-_AG_z7CgDlzYST_9Wwdw/viewform?usp=pp_url&entry.407278199=https://')} className="rounded-[2rem] bg-[#ffffff]  p-8 space-y-5 ">
                    <p className="text-[1.5rem] font-[500]  tracking-normal leading-[1rem] text-[#333333]">Know More</p>
                </button>

            </div>


          </div>

       


    );
};

export default index;
