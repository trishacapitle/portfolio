import Image from "next/image";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  image: string;
  tags: string;
  preview?: string | null;
  github?: string | null;
}

const ProjectCard = (project: ProjectCardProps) => {
  const { title, description, stack, image, tags, preview, github } = project;

  return (
    <div className="font-secondary m-4 flex h-fit w-[90vw] max-w-3xl flex-col items-center justify-center gap-4 rounded-xl border border-gray-500 bg-gray-600/25 p-6 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:flex-row">
      <div className="relative h-100 w-full rounded-xl bg-[#1A1A1A] md:w-100">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover"
        />
        <p className="absolute top-2 left-2 rounded-full bg-[#0A0A0A] p-2 text-xs">
          {tags}
        </p>
      </div>
      <div className="info flex flex-col gap-2 text-sm tracking-wide md:h-full md:max-w-[40%] mb-2">
        <p className="text-lg">{title}</p>
        <p className="text-(--grey)">{description}</p>
        <div>
          <p className="uppercase">Project Info</p>
          <hr className="border border-(--grey)/25" />
          <div className="flex justify-between">
            <p>Stack</p>
            <p className="text-(--grey) text-right">{stack}</p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-4 text-xs uppercase underline underline-offset-4 md:flex-row">
          {preview && (
            <a
              href={preview}
              target="_blank"
              className="flex items-center gap-2"
            >
              Live Demo <BiLinkExternal fill="white" size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2"
            >
              See on Github <BiLogoGithub fill="white" size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
