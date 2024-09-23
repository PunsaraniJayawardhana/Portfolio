import { BaseInfo } from '@/Data/data';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
  <div className="w-full justify-items-center pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative it">
    <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
           <div>
            <h1 
                data-aos="fade-left" className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold" >
                I am {BaseInfo.name} 
            </h1>
            <h1 
                data-aos="fade-left" data-aos-delay="100" className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold 
                md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                {BaseInfo.position}
            </h1>
            <p data-aos="fade-left" data-aos-delay="200"
                className="mt-6 text-sm md:text-base text-white text-opacity-60  ">
                {BaseInfo.description}
            </p>
            <a
            href="/cv.pdf" // Path to your CV in the public folder
            download="cv.pdf">
                <button 
                    data-aos="zoom-in" 
                    data-aos-delay="300"
                    className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg
                    transition-all duration-200 rounded-lg mt-8 bg-blue-900 flex items-center space-x-2">
                    <span>Download CV</span>
                    <FaDownload />
                </button>
            </a>
           </div>
           <div 
                data-aos="zoom-in" 
                data-aos-delay="400"
                className="mx-auto lg:block rounded-[3rem] border-[3.5px] border-purple-500 overflow-x-hidden fi">
                <Image 
                src={BaseInfo.profilePic} 
                alt={BaseInfo.name} 
                width={200}
                height={200}
                className=""/>
            </div> 
        </div>
    </div>
  </div>

  );
  
};

export default Hero;