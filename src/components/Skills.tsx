"use client";

// Import
import { skills } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks";
import Image from 'next/image';

const Skills = () => {
  const { ref } = useSectionInView({ 
    sectionName: "skills", 
    threshold: 0.10
  });

  return (
    <section ref={ref} id="skills" className="md:mx-16 mt-0 flex flex-col items-center w-4/5 scroll-mt-24">
      <h2 className="text-3xl font-medium capitalize mb-8">My Skills</h2>
    
      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-x-16 lg:gap-y-2 flex flex-col items-center gap-4">
        {skills.map((section, index) => {
          return (
            <div key={index} className={`${section.span ? "flex flex-col items-center gap-5 p-4 col-span-2" : "flex flex-col items-center gap-5 p-4"}`}>
              <span className="text-xl font-medium">{section.section}</span>
              <ul className="flex flex-row flex-wrap justify-center gap-2">
                {section.skills.map((skill, index) => {
                  return (
                    <li key={index} className="flex flex-col items-center gap-2 w-[100px] h-[100px] hover:scale-110 transition">
                      <Image 
                        src={skill.icon}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto h-[72px]"
                        alt={skill.name}
                      />
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
