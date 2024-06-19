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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from 'next/image';
import { Button } from "./ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="m-16 flex flex-col items-center w-3/5">
      <h2 className="text-3xl font-medium capitalize mb-8">My Projects</h2>

      <div className="flex flex-col gap-5">
        {projects.map((project, index) => {
          return (
            <div key={index} className="border rounded-lg flex lg:flex-row lg:gap-5 flex-col">
              <Card className="border-none flex flex-col" style={{ justifyContent: "space-between" }}>
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
              <Image 
                src={project.imageUrl}
                width="0"
                height="0"
                sizes="100vw"
                alt={project.title}
                className="rounded-lg shadow-2xl object-cover w-auto lg:w-[60%] h-auto"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
