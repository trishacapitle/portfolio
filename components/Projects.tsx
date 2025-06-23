import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  const projects = {
    project1: {
      title: "Digital Tour Guide System for an Electric Vehicle Prototype",
      description:
        "A digital tour guide solution of a touring electric shuttle prototype that automatically narrates destination highlights and synchronized slideshow presentations based on geofence triggers, and real-time location tracking.",
      stack: "Electron, Vite, React, Tailwind",
      image: "/digital-tour-guide-system.jpg",
      tags: "Contract",
      github:
        "https://github.com/trishacapitle/digital-tour-guide-system",
    },
    project2: {
      title:
        "Battery and Solar Monitoring System with Custom Android App Syncing",
      description:
        "Developed an all in one battery and solar monitoring system for an electric vehicle prototype with sync functionality with it's custom android app.",
      stack: "Electron, Vite, React, React Native, Tailwind",
      image: "/portrait.png",
      tags: "Contract",
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
    project3: {
      title: "Creative Landing Page",
      description: "A landing page with smooth and creative animations.",
      stack: "Next.js, React, GSAP",
      image: "/portrait.png",
      tags: "Concept",
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
    project4: {
      title: "E-Commerce Website; design from Figma Community",
      description:
        "Developed front-end of an e-commerce website from a Figma design.",
      stack: "Next.js, React, Tailwind",
      image: "/portrait.png",
      tags: "Concept",
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
    project5: {
      title: "Webflow Landing Page",
      description:
        "Engaging webflow website with rich animations utilizing power of GSAP.",
      stack: "Webflow, GSAP",
      image: "/portrait.png",
      tags: "Concept",
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
    project6: {
      title: "Custom Shopify Theme",
      description:
        "A custom shopify theme with rich animations and easy implementation.",
      stack: "Liquid, Shopify, GSAP",
      image: "/portrait.png",
      tags: "Concept",
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
  };

  return (
    <div className="flex h-fit w-full flex-col gap-6 mb-20">
      <div className="font-primary p-6 text-6xl text-white md:p-8">
        <span className="text-(--grey)">Featured</span> Projects
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard
            key={key}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
