"use client";

// Imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from 'next/image';
import { Button } from "./ui/button";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView({ 
    sectionName: "projects", 
    threshold: 0.10
  });

  return (
    <section ref={ref} id="projects" className="md:m-16 my-16 mx-0 flex flex-col items-center md:w-3/5 w-4/5 scroll-mt-24">
      <h2 className="text-3xl font-medium capitalize mb-8">My Projects</h2>

      <div className="flex flex-col gap-5">
        {projects.map((project, index) => {
          return (
            <div key={index} className="border rounded-lg flex lg:flex-row flex-col group overflow-hidden">
              <Card className="border-none lg:rounded-r-none rounded-b-none flex flex-col hover:bg-gray-200 transition" style={{ justifyContent: "space-between" }}>
                <div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex lg:flex-row lg:gap-4 flex-col gap-2">
                      <span>Made with: </span>
                      <div className="flex flex-row gap-4">
                        {project.stack.map((stack, index) => {
                          return (
                            <TooltipProvider key={index}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Image 
                                    src={stack.icon}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-auto h-[24px]"
                                    alt={stack.tech}
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{stack.tech}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )
                        })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row gap-5">
                      <span className="text-sm">{project.description}</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="flex flex-row gap-3">
                  {project.links.map((link, index) => {
                    return (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Button asChild className="flex items-center text-dark border border-black text-md bg-white rounded-full px-3 hover:bg-white hover:scale-110 active:scale-110 active:bg-dark">
                              <Link href={link.link} target="_blank">
                                <Image 
                                  src={link.icon}
                                  width="0"
                                  height="0"
                                  sizes="100vw"
                                  className="w-[20px] h-[20px]"
                                  alt={link.tooltip}
                                />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{link.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )
                  })}
                </CardFooter>
              </Card>

              <div 
                className="w-full md:min-w-[400px] lg:rounded-l-none rounded-lg shadow-2xl object-cover lg:w-[60%] transition group-hover:scale-110 lg:group-hover:scale-[1.05] group-hover:-rotate-2" 
                style={{ zIndex: "-1" }}>
                {project.image ? (
                  <Image 
                    src={project.imageUrl}
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video playsInline autoPlay loop muted className="h-full w-full object-cover">
                    <source src={project.imageUrl} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
