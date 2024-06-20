"use client";

// Imports
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header>
      <div className="w-screen top-0 left-0 right-0 z-999 px-4 md:py-8 md:px-32 lg:mx-auto md:fixed flex justify-between bg-white">
        {/* Logo */}
        <Link href="/" className="hidden md:flex flex-col md:flex-row md:gap-4">
          <h1 className="text-2xl font-semibold">Lyco Lacuesta</h1>
          <span className="md:self-end text-light pr-8">Front End Developer</span>
        </Link>

        {/* Desktop Only Nav */}
        <div className="hidden lg:flex">
          <nav className="self-end flex gap-4">
            {links.map((link, index) => {
              return (
                <Link 
                  href={link.path} 
                  key={index}
                  className={`${
                    link.name === activeSection && "text-dark"
                  } capitalize text-accent hover:text-accent-hover transition-all`}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now)
                  }}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* TODO: Nav for Medium devices */}

      </div>
    </header>
  )
}

export default Header
