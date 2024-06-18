// Components
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-8 my-8 lg:mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col md:flex-row md:gap-4">
          <h1 className="text-2xl font-semibold">Lyco Lacuesta</h1>
          <span className="md:self-end text-light">Front End Developer</span>
        </Link>

        {/* Desktop Only Nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>

      </div>
    </header>
  )
}

export default Header
