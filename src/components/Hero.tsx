import React from "react";
import Navbar from "./Navbar";
type HeroProps = {
    title : string 
} 

const Hero = ({title}: HeroProps) => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl uppercase font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
              {title} <br className="lg:flex hidden"/> dolor siamet
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Lorem ipsum siamet <br className="lg:flex hidden"/> lorem lorem bingung nulis
            </p>
            <button className="bg-[#FF8A00] hover:bg-[#f6d6b1] text-[#ffffff] hover:text-[#FF8A00] font-bold py-4 px-4 rounded-full w-36 lg:w-44 capitalize">Click Now</button>
          </div>
          <img src="/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;