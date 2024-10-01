import SectionHeading from '@/components/Helper/SectionHeading';
import { aboutInfo } from '@/Data/data';
import React from 'react';
import { FaCheck } from 'react-icons/fa';


const About = () => {
  return (
    <section id="about">
    <div className="pt-16 pb-16 bg-[#050709] ">
        <SectionHeading>About Me</SectionHeading>
        <div 
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            className="w-[80%] mx-auto items-center mt-20 text-center">
                <div>
                    <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                            {aboutInfo.title}
                    </h1>
                    <p className="mt-6 text-base text-gray-500">
                        {aboutInfo.description}
                    </p>
                </div>
            
                <div className="mt-10 flex flex-col items-center justify-center">

                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                            <FaCheck className="text-white"/>
                        </div>
                        
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                                Frontend Development
                            </p>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                            <FaCheck className="text-white"/>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                            Backend Development
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                            <FaCheck className="text-white"/>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                            Full Stack Development
                        </p>
                    </div>
                </div>
        </div>
            
    </div>
    </section>  
  );
};

export default About;