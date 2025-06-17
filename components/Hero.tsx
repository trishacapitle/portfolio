"use client";

import Image from "next/image";
import {
	BiLogoLinkedinSquare,
	BiLogoGithub,
	BiPaperPlane,
	BiArrowToBottom
} from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Hero = () => {
	useGSAP(() => {

		const tl = gsap.timeline();

		tl.fromTo(
      ".hi",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
    )
      .fromTo(
        ".trisha",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(
        ".capitle",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(
        ".description",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(
        ".actions",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5",
      )
      .to(".tri", { delay: 1, opacity: 0 }, "-=1")
      .to(".a", { x: -120, ease: "elastic", duration: 1.5 }, "-=0.5")
      .to(".s, .h", { duration: 1 }, "<");
		
		gsap.to(".download", {
			y: -8,
			ease: "power1.in",
			yoyo: true,
			repeat: -1,
		})

		gsap.set(".section", {
			visibility: "hidden",
			opacity: 0,
		});

		const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=3000",
        scrub: 2,
        pin: true,
      },
    });

		tl2
      .to(".image", {
        xPercent: -80,
        duration: 2,
        ease: "power2.in",
      })
      .to(
        ".hi, .trisha, .capitle, .description, .actions",
        {
          y: -50,
          opacity: 0,
          duration: 2,
          ease: "power2.in",
        },
        "<",
      )
      .to(
        ".column1",
        {
          visibility: "hidden",
          duration: 2,
          ease: "power2.in",
        },
        "-=0.5",
      )
      .to(
        ".resume",
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        "-=3",
      )
      .to(
        ".image",
        {
          width: "100%",
          duration: 2,
        },
        "<",
      )
      .to(
        ".section",
        {
          visibility: "visible",
          opacity: 1,
          duration: 3,
          ease: "power2.in",
          y: -200,
        },
        "-=1",
      )
      .to(
        ".section",
        {
          duration: 2,
        }
      );
	}, []);
	

	return (
    <div className="hero relative flex h-screen w-full flex-col justify-center md:flex-row">
      {/* Left Column */}
      <div className="column1 flex h-fit flex-col justify-center px-6 md:h-full md:w-[50%] md:px-8">
        <div className="hi font-primary text-3xl text-white md:text-5xl">
          Hi, I&apos;m
        </div>

        <div className="flex flex-col gap-0 md:flex-row md:gap-2">
          <div className="trisha font-primary relative flex text-8xl tracking-wide">
            <div className="tri headline-part1 text-(--grey)">TRI</div>
            <div className="s text-(--grey)">S</div>
            <div className="h text-(--grey)">H</div>
            <div className="a text-(--grey)">A</div>
          </div>
          <div className="capitle font-primary text-8xl tracking-wide text-white">
            CAPITLE
          </div>
        </div>

        <div className="description font-secondary text-base font-normal text-white md:text-lg">
          A Front‑End Developer crafting modern, responsive websites with clean,
          efficient code, and intuitive design. Constantly exploring emerging
          technologies and innovative approaches to push the boundaries of web
          development.
        </div>

        <div className="actions mt-4 flex items-center gap-2 md:gap-3">
          <button className="button font-primary flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-600/25 p-3 text-2xl leading-0 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:gap-4 md:p-4 md:px-6 md:text-3xl">
            Contact Me
            <BiPaperPlane size={30} />
          </button>
          <a
            className="button"
            href="https://www.linkedin.com/in/trisha-capitle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare size={40} color="white" />
          </a>
          <a
            className="button"
            href="https://github.com/trishacapitle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub size={40} color="white" />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="image relative h-[50%] w-full md:h-full md:w-[50%]">
        <Image
          src="/portrait.png"
          width={800}
          height={800}
          alt="Picture of the author"
          draggable={false}
          className="absolute bottom-0 h-full w-full object-cover"
        />
        <button className="resume font-primary absolute right-40 bottom-30 z-99 flex items-center gap-1 rounded-lg border border-gray-500 bg-gray-600/10 p-3 text-2xl text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:right-60 md:bottom-40 md:gap-2 md:p-4 md:px-6 md:text-3xl">
          Resume
          <BiArrowToBottom size={30} color="white" className="download" />
        </button>
      </div>

      <div className="section absolute right-0 bottom-20 max-w-2xl">
        <div className="font-primary text-xl tracking-widest text-(--grey) md:text-5xl">
          2024-2025
        </div>
        <div className="jobTitle font-primary text-8xl tracking-wide text-white">
          Full-Stack <span className="text-(--grey)">Developer</span>
        </div>
        <div className="font-secondary -mt-2 mb-2 text-sm font-normal text-white md:text-lg">
          Independent Contractor/Freelancer
        </div>

        <div className="font-secondary text-sm font-normal text-white md:text-base">
          Designed and developed 8+ responsive websites, apps, and custom
          software solutions that met each client’s goals, earning an average
          satisfaction score of 4.8/5.
        </div>
      </div>
    </div>
  );
};

export default Hero;
