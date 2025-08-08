"use client";

import {
  BiPaperPlane,
  BiLogoLinkedin,
  BiLogoGithub,
  BiCopyright,
  BiCheckDouble,
} from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Button from "./ui/Button";
import emailjs from "@emailjs/browser";
import Modal from "./ui/Modal";

const Contact = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.from(".connect, .copyright", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top 50%",
      },
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
    gsap.from(".form", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top 50%",
      },
      x: 100,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top 50%",
      },
      opacity: 0,
      duration: 2,
      ease: "power1.out",
    });
  });

  const form = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowModal(true);

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
      form.current.reset();
    } else {
      console.log("Form reference is null.");
    }
  };

  return (
    <>
      <div className="trigger">
        <div className="flex h-screen flex-col gap-4 p-6 md:h-150 md:flex-row md:gap-6">
          <div className="flex h-[50%] w-full flex-col justify-between text-white md:w-[50%]">
            <div className="connect">
              <p className="font-primary text-6xl">
                <span className="text-(--grey)">Let&apos;s</span> Connect
              </p>
              <p className="font-secondary mb-4 tracking-wide text-(--grey)">
                Say hello at{" "}
                <span className="text-white underline">
                  trishacapitle01@gmail.com
                </span>
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/trishacapitle">
                  <BiLogoLinkedin
                    size={30}
                    className="duration-200 ease-in-out hover:scale-110"
                  />
                </a>
                <a href="https://github.com/trishacapitle">
                  <BiLogoGithub
                    size={30}
                    className="duration-200 ease-in-out hover:scale-110"
                  />
                </a>
              </div>
            </div>
            <p className="copyright font-secondary flex items-center gap-4 py-10 text-(--grey)">
              <BiCopyright /> 2025 AshDev
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form font-secondary flex w-full flex-col text-white md:w-[50%]"
          >
            <label htmlFor="name" className="text-sm text-(--grey)">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-(--grey)"
            />
            <label htmlFor="email" className="text-sm text-(--grey)">
              Email
            </label>
            <input
              name="email"
              type="text"
              required
              placeholder="johndoe@email.com"
              className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-(--grey)"
            />
            <label htmlFor="title" className="text-sm text-(--grey)">
              Subject
            </label>
            <input
              name="title"
              type="text"
              required
              className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
            />
            <label htmlFor="message" className="text-sm text-(--grey)">
              Message
            </label>
            <textarea
              name="message"
              required
              className="mt-2 mb-8 h-40 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
            />
            <Button
              className="submit-btn w-fit text-xl md:text-2xl"
              title="Send Message"
              icon={<BiPaperPlane className="h-4 w-4 md:h-6 md:w-6" />}
            />
            <Modal open={showModal} onClose={() => setShowModal(false)}>
              <div className="w-40 text-center">
                <div className="mx-auto mb-4 flex w-36 flex-col items-center">
                  <BiCheckDouble size={80} />
                  <p className="text-lg">Email Sent!</p>
                </div>
              </div>
            </Modal>
          </form>
        </div>
        <div className="footer text-tiny p-6 md:text-sm">
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
    </>
  );
};

export default Contact;
