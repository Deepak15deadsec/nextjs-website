import React from "react";





const index = () => {
    const openInNewTab = (url: string | URL | undefined) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div className="bg-[#434343] pt-[15rem]  ">
            <div className="flex flex-col justify-center items-center pb-[5rem] xl:px-[22rem] lg:px-[7rem] px-[3rem]">
                <div className="w-full space-y-[5rem] py-[3rem]">
                    <p className="text-center font-[700] lg:text-[6rem] lg:leading-[5rem]  text-[#FFFFFF]">
                    Be a part of the future of advertising <br/> with avni-ambassador program
                    </p>
                    <p className="text-center font-[400] lg:text-[3rem] lg:leading-[3.3rem] text-[#FFFFFF]">
                    Dive into the world of web 3.0 ad-tech <br/> with the vision of avni
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
