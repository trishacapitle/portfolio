import ProjectCard from "./ui/ProjectCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Projects = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.from(".cards", {
      scrollTrigger: {
        scrub: true,
        trigger: ".card-container",
        start: "top 60%",
        end: "bottom 80%",
      },
      stagger: 0.5,
      y: 100,
      scale: 0.70,
      opacity: 0,
  })
})

  const projects = {
    project1: {
      title: "Digital Tour Guide System for an Electric Vehicle Prototype",
      description:
        "A digital tour guide solution of a touring electric shuttle prototype that automatically narrates destination highlights and synchronized slideshow presentations based on geofence triggers, and real-time location tracking.",
      stack:
        "Electron, React + Vite, TailwindCSS, Turf.js, MapLibre GL, serialport",
      image: "/digital-tour-guide-system.jpg",
      tags: "Contract",
      github: "https://github.com/trishacapitle/digital-tour-guide-system",
    },
    project2: {
      title:
        "Battery and Solar Monitoring System with Custom Android App Syncing",
      description:
        "Developed an all in one battery and solar monitoring system for an electric vehicle prototype with sync functionality with it's custom android app.",
      stack: "Electron, React + Vite, React Native, TailwindCSS",
      image: "/battery-solar-monitor.jpg",
      tags: "Contract",
    },
    project3: {
      title: "AWWWARDS Web Animations",
      description:
        "Compiled recreations of GSAP animations in React from award-winning websites.",
      stack: "React + Vite, GSAP",
      image: "/web-animations.jpg",
      tags: "Concept",
      preview: "https://awwwards-animations.vercel.app",
      github: "https://github.com/trishacapitle/awwwards-animations",
    },
    project4: {
      title: "Clothing E-Commerce Website; design from Figma Community",
      description:
        "Built the front-end of an e-commerce website from a Figma UI design.",
      stack: "React + Vite, TailwindCSS",
      image: "/clothing-ecommerce.jpg",
      tags: "Concept",
      preview: "https://clothing-ecommerce-ashdev.vercel.app",
      github: "https://github.com/trishacapitle/clothing-ecommerce-frontend",
    },
    // project5: {
    //   title: "Webflow Landing Page",
    //   description:
    //     "Engaging webflow website with rich animations utilizing power of GSAP.",
    //   stack: "Webflow, GSAP",
    //   image: "/portrait.png",
    //   tags: "Concept",
    //   preview: "https://example.com/preview1",
    //   github: "https://github.com/example/project-two",
    // },
  };

  return (
    <div className="my-20 flex h-fit w-full flex-col gap-6">
      <div className="title font-primary p-6 text-6xl text-white md:p-8">
        <span className="text-(--grey)">Featured</span> Projects
      </div>
      <div className="card-container flex w-full flex-col items-center gap-4">
          {Object.entries(projects).map(([key, project]) => (
            <div className="cards" key={key}>
              <ProjectCard {...project} />
            </div>
          ))}
        
      </div>
    </div>
  );
};
export default Projects;
