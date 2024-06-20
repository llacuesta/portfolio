"use client";

// Imports
import Link from "next/link";
import { Button } from "./ui/button"
import { HiDownload } from "react-icons/hi"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const Hero = () => {
  const { ref } = useSectionInView({ 
    sectionName: "home", 
    threshold: 0.75
  });
  
  return (
    <section ref={ref} id="home" className="bg-[url('/bg.png')] bg-no-repeat bg-cover scroll-mt-24">
      <div className="flex flex-col md:mx-24 mx-16 md:pb-16 pt-16 pb-[400px] md:pt-48 lg:pt-96 md:pr-[38%] md:items-start items-center gap-5">
        {/* Intro */}
        <p className="md:text-3xl text-2xl text-white md:text-left text-center">
          Hi, <span className="font-bold">I&apos;m Lyco</span>! I&apos;m a <span className="font-bold">Front End Developer</span> and a <span className="font-bold">UI/UX designer</span> based on the Philippines. I am passionate in <span className="font-bold">designing and building things.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-2">
          <Button asChild className="flex items-center text-dark text-md bg-white rounded-full gap-2 hover:bg-dark hover:text-accent hover:scale-110 active:scale-110">
            <Link href="/Lacuesta_Resume.pdf">Résumé <HiDownload /></Link>
          </Button>
          <Button asChild className="flex items-center text-dark text-md bg-white rounded-full px-3 hover:bg-dark hover:text-accent hover:scale-110 active:scale-110">
            <Link href="https://www.linkedin.com/in/lllacuesta/" target="_blank"><FaLinkedinIn /></Link>
          </Button>
          <Button asChild className="flex items-center text-dark text-md bg-white rounded-full px-3 hover:bg-dark hover:text-accent hover:scale-110 active:scale-110">
            <Link href="https://github.com/llacuesta" target="_blank"><FaGithub /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
