import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
        <div> 
            <Image
            src="/images/logo.png"
            alt="logo"
            width={70}
            height={70} 
            className="mx-auto pb-6"
            />
        </div>
        <div className="flex items-center flex-wrap text-white justify-center space-x-10 ">
        {/* flex items-center flex-wrap justify-center space-x-10 space-y-4 font-bold text-center  */}
            <div>Home</div>
            <div>Services</div>
            <div>Projects</div>
            <div>Reviews</div>
            <div>Contact</div> 
        </div>
        <p className="text-white text-opacity-60 mt-6 text-center">
            © 2024 Convertio ltd. All rights reserved. Terms of Use Privacy Policy
        </p>
    </div>
  );
};

export default Footer;