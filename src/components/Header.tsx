// Components
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
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
          <Nav />
        </div>

        {/* TODO: Nav for Medium devices */}

      </div>
    </header>
  )
}

export default Header
