import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills">
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => {
          return (
          <div 
              data-aos="fade-left" 
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 90}`}
              key={skill.id}>
            <SkillCard skill={skill} />
          </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default Skills;
