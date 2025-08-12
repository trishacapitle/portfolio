"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const TechStack = () => {
  const icons = [
    "html",
    "css",
    "javascript",
    "typescript",
    "gsap",
    "react",
    "next",
    "tailwind",
    // "shadcn",
    "electron",
    "vite",
    "vitest",
    "git",
    "ghub",
    "vercel",
    "figma",
    "webflow",
    // "shopify",
  ];

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.set(".icon, .subtitle", {
      opacity: 0,
      y: 40,
    });

    gsap.to(".icon", {
      scrollTrigger: {
        trigger: ".icon",
        start: "top 80%",
        end: "top 40%",
      },
      opacity: 1,
      duration: 1,
      ease: "power1.in",
      stagger: 0.1,
      y: 0,
    });

    gsap.to(".subtitle", {
      scrollTrigger: {
        trigger: ".subtitle",
      },
      y: 0,
      opacity: 1,
      dellay: 0.5,
      duration: 1,
      ease: "power1.in",
    });

    gsap.from(".title", {
      scrollTrigger: {
        trigger: ".title",
      },
      opacity: 0,
      x: 50,
      duration: 1,
    });
  });
  return (
    <div className="stack relative my-20 flex h-fit w-full flex-col lg:h-screen">
      <div className="title font-primary px-6 py-6 text-6xl text-white md:px-8 md:pt-8">
        <span className="text-(--grey)">Tech</span> Stack
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {icons.map((icon) => (
          <div
            key={icon}
            className="icon flex h-40 items-center justify-center rounded-lg border border-gray-500 bg-gray-600/10 p-4 backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25"
          >
            <Image
              src={`/${icon}.svg`}
              width={80}
              height={80}
              alt={icon}
              className="justify-self-center object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="subtitle font-secondary flex items-center px-12 pt-6 text-center text-lg text-white md:px-20 md:pt-8 md:text-xl">
        Adaptable and quick to master new tools and frameworks, I ensure my tech
        stack evolves with industry trends and continuously refine my approach
        to build efficient, modern websites.
      </div>
    </div>
  );
};

export default TechStack;
