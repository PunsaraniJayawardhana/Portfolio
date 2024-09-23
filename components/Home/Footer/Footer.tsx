import React from 'react';
import Image from 'next/image';
import { SocialData } from '@/Data/data';



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
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-8">
      {SocialData.map((data) => (
        <a href={data.Link}  key={data.title}>
          <div className='w-auto flex justify-end py-[6px] px-[8px] bg-blue-900 opacity-100 rounded-full hover:bg-blue-950 transition cursor-pointer'>
            <div className='text-2xl font-bold text-[#301e1e] text-center'>{data.icon}</div>
          </div>
        </a>
      ))}
      </div>
      <div className="flex items-center flex-wrap text-white justify-center space-x-10">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Skills</div>
        <div>Contacts</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2024 Convertio Ltd. All rights reserved. Terms of Use Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
