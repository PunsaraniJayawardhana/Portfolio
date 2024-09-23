import SectionHeading from '@/components/Helper/SectionHeading';
import { projectData } from '@/Data/data';
import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <section id="projects">
  <div className="pt-16 pb-16 bg-[#050709]">
    <SectionHeading>My Projects</SectionHeading>
    <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => {
            return(
                <div 
                  data-aos="fade-up" 
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={`${i * 150}`}
                  key={project.id}
                  className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
                >
                    
                    <Image
                    src={project.image}
                    alt="project"
                    width={300}
                    height={200}
                    className="w-full" />
                    
                    <p className="text-white text-center mt-2">{project.title}</p>
                    <p className=" text-gray-500 text-center mt-2 text-sm">{project.stack}</p>

                </div>
            )
        })}
    </div>
  </div>
  </section>
);
};

export default Project;
