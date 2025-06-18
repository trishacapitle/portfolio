import Image from "next/image"
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi"

const ProjectCard = () => {
  const projects = {
    project1: {
      title: "Project One",
      description:
        "This is a description of project one. It does many things and is very useful.",
      stack: ["React, Node.js, Express"],
      image: "/portrait.png",
      tags: ["Conceptual Work"],
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-one",
    },
    project2: {
      title: "Project Two",
      description:
        "This is a description of project two. It is even better than the first one.",
      stack: ["Vue", "Django"],
      image: "/path/to/image2.jpg",
      tags: ["Conceptual Work"],
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
  };

  const { project1 } = projects;

  return (
      <div className="font-secondary m-4 flex h-fit w-[90vw] max-w-3xl flex-col items-center justify-center gap-4 rounded-xl border border-gray-500 bg-gray-600/25 p-6 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:flex-row md:p-8">
        <div className="relative h-100 w-full rounded-xl bg-[#1A1A1A] md:w-100">
          <Image
            src={project1.image}
            alt={`${project1.title} preview`}
            fill
            className="object-cover"
          />
          <p className="absolute top-2 left-2 rounded-full bg-[#0A0A0A] p-2 text-xs">
            {project1.tags}
          </p>
        </div>
        <div className="info flex flex-col gap-2 text-sm tracking-wide md:h-full md:max-w-[40%]">
          <p className="text-lg">{project1.title}</p>
          <p className="text-(--grey)">{project1.description}</p>
          <div>
            <p className="uppercase">Project Info</p>
            <hr className="border border-(--grey)/25" />
            <div className="flex justify-between">
              <p>Stack</p>
              <p className="text-(--grey)">{project1.stack}</p>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-4 text-xs uppercase underline underline-offset-4 md:flex-row">
            <a
              href={project1.preview}
              target="_blank"
              className="flex items-center gap-2"
            >
              Live Demo <BiLinkExternal fill="white" size={20} />
            </a>
            <a
              href={project1.github}
              target="_blank"
              className="flex items-center gap-2"
            >
              See on Github <BiLogoGithub fill="white" size={20} />
            </a>
          </div>
        </div>
      </div>
  );
}

export default ProjectCard