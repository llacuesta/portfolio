"use client";

// Imports
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "#home"
  },
  {
    name: "projects",
    path: "#projects"
  },
  {
    name: "skills",
    path: "#skills"
  },
  {
    name: "experience",
    path: "#experience"
  },
  {
    name: "contact",
    path: "#contact"
  }
] as const;

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="self-end flex gap-4">
      {links.map((link, index) => {
        return (
          <Link 
            href={link.path} 
            key={index}
            className={`${
              link.path === pathName && "text-dark"
            } capitalize text-accent hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
