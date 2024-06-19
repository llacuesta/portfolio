// Imports
import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Projects />
    </main>
  );
}
