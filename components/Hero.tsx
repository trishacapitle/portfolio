"use client";

import Image from "next/image";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiPaperPlane,
  BiArrowToBottom,
} from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Button";

const Hero = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    const letters = document.querySelectorAll(".loader-text span")

    tl.to(letters, {
      duration: 0.8,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
    })
      .to(letters, {
        "--clipPath": "inset(0% 0 0 0)",
        duration: 0.8,
        delay: 0.3,
        stagger: 0.05,
        ease: "power1.inOut",
      })
      .to(letters, {
        duration: 0.6,
        y: 100,
        opacity: 0,
        stagger: 0.05,
        delay: 0.5,
        ease: "power2.in",
      })
      .to(
        (".loader"),
        {
          y: -100,
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
          pointerEvents: "none",
        },
        "-=0.3",
      )
      .fromTo(
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
        ".ashdev, .resume",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
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
    });

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
        ".column1",
        {
          opacity: 0,
          duration: 2,
          ease: "power2.in",
        },
        "<",
      )
      .to(".column1", {
        visibility: "hidden",
        duration: 2,
        ease: "power2.in",
      })
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
          y: -120,
        },
        "-=1",
      )
      .to(".section", {
        duration: 2,
      });
  }, []);

  return (
    <div className="hero relative flex h-screen w-full flex-col justify-center md:flex-row">
      {/* Loader */}
      <div className="loader absolute -top-16 z-99 flex h-screen w-screen items-center justify-center bg-[#121212] ">
        <div className="loader-text font-primary text-white/20 text-[6.5rem] overflow-hidden leading-none tracking-wider">
          <span data-text="A">A</span>
          <span data-text="S">S</span>
          <span data-text="H">H</span>
          <span data-text="D">D</span>
          <span data-text="E">E</span>
          <span data-text="V">V</span>
        </div>
      </div>

      {/* Left Column */}
      <div className="column1 flex h-fit flex-col justify-center px-6 md:h-full md:w-[50%] md:pl-8">
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
          I create modern, responsive websites with clean,
          efficient code, and intuitive design. Constantly exploring emerging
          technologies and innovative approaches to push the boundaries of web
          development.
        </div>

        <div className="actions mt-4 flex items-center gap-2 md:gap-3">
          <Button
            className="button text-2xl md:text-3xl"
            title="Contact Me"
            icon={<BiPaperPlane className="h-5 w-5 md:h-7 md:w-7" />}
          />
          <a
            className="button duration-200 ease-in-out hover:scale-110"
            href="https://www.linkedin.com/in/trisha-capitle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare size={40} color="white" />
          </a>
          <a
            className="button duration-200 ease-in-out hover:scale-110"
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
          alt="portrait"
          draggable={false}
          className="ashdev absolute bottom-0 h-full w-full object-cover"
        />
        <a href="/resume.pdf" download>
          <Button
            className="resume absolute bottom-30 left-1/2 w-fit -translate-x-1/2 text-2xl md:text-3xl"
            title="Resume"
            icon={
              <BiArrowToBottom
                color="white"
                className="download h-5 w-5 md:h-7 md:w-7"
              />
            }
          />
        </a>
      </div>

      <div className="section absolute right-0 bottom-20 mx-6 max-w-xl">
        <p className="tracking-[2px] font-secondary uppercase text-white">experience</p>
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
          Designed and developed 6+ responsive websites, apps, and custom
          software solutions that met each client’s goals, budget, and time constraints.
        </div>
      </div>
    </div>
  );
};

export default Hero;
