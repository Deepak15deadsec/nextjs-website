import React from "react";





const index = () => {
    const openInNewTab = (url: string | URL | undefined) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div className="bg-[#36454f]  pt-[10rem]  ">

            <div className="lg:flex md:flex hidden flex-col justify-center items-center pb-[12rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-full space-y-[5rem] py-[3rem]">
                    <p className="text-center font-[800] lg:text-[8rem] lg:leading-[10.5rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                    lead the change <br/> you wish to see
                    </p>
                    <p className="text-center font-[500] pt-[1rem] lg:text-[2.0 rem] lg:leading-[4.2rem] md:text-[2.2rem] md:leading-[2.5rem] leading-[1.8rem] text-[1.5rem] text-[#FFFFFF]">
                    reward and loyalty should not be a transactional exchange <br/>  rather a genuine connection between customers and their brands, <br/>built on trust, value, and shared experiences
                    </p>
                </div>
                <button onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdRCS1T45mEvvgbY_-j0esPbXM4F-_AG_z7CgDlzYST_9Wwdw/viewform?usp=pp_url&entry.407278199=https://')} className="rounded-[2rem] bg-[#ffffff]  p-8 space-y-5 ">
                    <p className="text-[1.5rem] font-[500]  tracking-normal leading-[1rem] text-[#333333]">Become an ambassador</p>
                </button>
            </div>

            <div className="lg:hidden md:hidden flex flex-col justify-center items-center pb-[12rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-full space-y-[5rem] py-[3rem]">
                    <p className="text-center font-[800] lg:text-[8rem] lg:leading-[10.5rem] md:text-[5rem] md:leading-[5rem] text-[3rem] leading-[3rem] text-[#FFFFFF]">
                    lead the change <br/> you wish to see
                    </p>
                    <p className="text-center font-[500]  lg:text-[2.0 rem] lg:leading-[4.2rem] md:text-[2.2rem] md:leading-[2.5rem] leading-[1.8rem] text-[1.5rem] text-[#FFFFFF]">
                    reward and loyalty should not be a transactional exchange   rather a genuine connection between customers and their brands, built on trust, value, and shared experiences
                    </p>
                </div>
                <button onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdRCS1T45mEvvgbY_-j0esPbXM4F-_AG_z7CgDlzYST_9Wwdw/viewform?usp=pp_url&entry.407278199=https://')} className="rounded-[2rem] bg-[#ffffff]  p-8 space-y-5 ">
                    <p className="text-[1.5rem] font-[500]  tracking-normal leading-[1rem] text-[#333333]">Become an ambassador</p>
                </button>
            </div>

        </div>
    );
};
export default index;
