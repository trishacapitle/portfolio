"use client";

import TechStack from "@/components/TechStack";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center overflow-hidden bg-[#121212]">
      <Cursor />
      <div className="no-scrollbar w-screen max-w-7xl">
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
