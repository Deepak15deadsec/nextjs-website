import React from "react";
import Link from "next/link";
import Card from './Card'
import Cardd from './Cardd'
import Carddd from './Carddd'
import Flag from "../../../../public/images/teamwork.png";
import Bow from "../../../../public/images/rainbow.png";
import Mission from "../../../../public/images/mission.png";


const index = () => {

    return (
        <div className="bg-[#2EB7F5]   flex flex-col justify-center items-center px-[1rem] xl:px-[15rem] lg:px-[4rem] md:px-[2rem]">
            <p className="text-[3.75rem] mt-[6rem] font-sans font-[600] text-center tracking-normal leading-[4rem] text-white">We’re an ambitious and smart team <br /> with a shared mission</p>

            <div className="grid xs:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-3 mt-[3rem] mb-[4rem]">
                <Card img={Flag.src} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="Excellent to each other"/>
                <Card img={Bow.src} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="Pride in what we do"/>
                <Card img={Mission.src} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="Do the impossible"/>
            </div>


        </div>
    );
};

export default index;