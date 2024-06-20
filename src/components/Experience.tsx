"use client";

// Import
import { experience } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView({ 
    sectionName: "experience", 
    threshold: 0.50
  });

  return (
    <section ref={ref} id="experience" className="md:mx-16 mt-0 flex flex-col items-center w-[55%] scroll-mt-24">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">My Experience</h2>
      
      <div>
        {experience.map((experience, index) => {
          return (
            <div key={index} className="relative pl-8 sm:pl-52 py-6 group" style={{ zIndex: "-50" }}>
              <div className="text-xl mb-1 sm:mb-0">{experience.company}</div>
              
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[11.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-dark after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[11.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-[10rem] px-2 h-6 mb-3 sm:mb-0 text-dark bg-accent rounded-full">{`${experience.startYear} - ${experience.endYear}`}</time>
                <div className="text-2xl font-medium text-dark">{experience.role}</div>
              </div>
      
              <div className="text-dark text-md">{experience.description}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
