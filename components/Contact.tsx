"use client";

import {
  BiPaperPlane,
  BiLogoLinkedin,
  BiLogoGithub,
  BiCopyright,
} from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
 
useGSAP(() => {
  gsap.from(".connect, .copyright", {
    scrollTrigger: {
      trigger: ".trigger",
      start: "top 50%",
    },
    x: -200,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".form", {
    scrollTrigger: {
      trigger: ".trigger",
      start: "top 50%",
    },
    x: 200,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
});
  
const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (form.current) {
    emailjs
      .sendForm("service_9al51q1", "template_7j2l8ec", form.current, {
        publicKey: "BRMXlPTOfxtLLJWhJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  } else {
    console.log("Form reference is null.");
  }
};

  return (
    <div className="trigger">
      <div className="flex h-screen flex-col gap-4 p-6 md:h-150 md:flex-row md:gap-6">
        <div className="flex h-[50%] w-full flex-col justify-between text-white md:w-[50%]">
          <div className="connect">
            <p className="font-primary text-6xl">
              <span className="text-(--grey)">Let&apos;s</span> Connect
            </p>
            <p className="font-secondary tracking-wide text-(--grey)">
              Say hello at{" "}
              <span className="text-white underline">
                trishacapitle01@gmail.com
              </span>
            </p>
            <p className="font-secondary mb-4 tracking-wide text-(--grey)">
              For more info, here&apos;s my{" "}
              <span className="text-white underline">
                <a>resume.</a>
              </span>
            </p>
            <div className="flex gap-4">
              <a href="">
                <BiLogoLinkedin
                  size={30}
                  className="duration-150 ease-in-out hover:scale-110"
                />
              </a>
              <a href="">
                <BiLogoGithub
                  size={30}
                  className="duration-150 ease-in-out hover:scale-110"
                />
              </a>
            </div>
          </div>
          <p className="copyright font-secondary flex items-center gap-4 py-10">
            <BiCopyright /> 2025 AshDev
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form font-secondary flex w-full flex-col text-white md:w-[50%]">
          <label htmlFor="name" className="text-sm text-(--grey)">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-(--grey)"
          />
          <label htmlFor="email" className="text-sm text-(--grey)">
            Email
          </label>
          <input
            name="email"
            type="text"
            placeholder="johndoe@email.com"
            className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-(--grey)"
          />
          <label htmlFor="title" className="text-sm text-(--grey)">
            Subject
          </label>
          <input
            name="title"
            type="text"
            className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
          />
          <label htmlFor="message" className="text-sm text-(--grey)">
            Message
          </label>
          <textarea
            name="message"
            className="mt-2 mb-8 h-40 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
          />
          <button className="button font-primary flex w-fit items-center gap-2 rounded-lg border border-gray-500 bg-gray-600/25 px-4 py-2 text-lg leading-0 tracking-wide text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:gap-4 md:p-4 md:px-6 md:text-2xl">
            Send Message
            <BiPaperPlane size={20} />
          </button>
        </form>
      </div>
      <div className="p-6">
        <hr className="mb-4 border border-(--grey)" />
        <p className="font-secondary text-center text-(--grey)">
          Designed in <span className="text-white">Figma</span>, coded on{" "}
          <span className="text-white">Visual Studio Code</span>. Built with{" "}
          <span className="text-white">Next.js</span> and{" "}
          <span className="text-white">Tailwind CSS</span>. Animations are
          brewed on <span className="text-white">GSAP</span>. Deployed with{" "}
          <span className="text-white">Vercel</span>.
        </p>
      </div>
    </div>
  );
};

export default Contact;
