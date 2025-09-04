import Image from "next/image";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  image?: string | null;
  video?: string;
  tags: string;
  preview?: string | null;
  github?: string | null;
}

const ProjectCard = (project: ProjectCardProps) => {
  const { title, description, stack, image, video, tags, preview, github } = project;

  return (
    <div className="font-secondary flex h-fit w-[90vw] max-w-3xl flex-col items-center justify-center gap-4 rounded-xl border border-gray-500 bg-gray-600/25 p-6 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:flex-row">
      <div className="relative h-100 w-full rounded-xl bg-[#1A1A1A] md:w-100 flex items-center">
        {image == null ? (
          <video autoPlay loop muted>
            <source src={video} type="video/webm" />
          </video>
        ) : (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-contain"
          />
        )}
        <p className="text-tiny absolute top-2 left-2 rounded-full bg-[#0A0A0A] p-2">
          {tags}
        </p>
      </div>
      <div className="info mb-2 flex flex-col gap-2 text-sm tracking-wide md:h-full md:max-w-[40%]">
        <p className="text-lg">{title}</p>
        <p className="text-(--grey)">{description}</p>
        <div>
          <p className="uppercase">Project Info</p>
          <hr className="border border-(--grey)/25" />
          <div className="flex justify-between">
            <p>Stack</p>
            <p className="text-right text-(--grey)">{stack}</p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-4 text-xs uppercase underline underline-offset-4 md:flex-row">
          {preview && (
            <a
              href={preview}
              target="_blank"
              className="flex cursor-none items-center gap-2 duration-250 ease-in-out hover:-translate-y-1"
            >
              Live Demo <BiLinkExternal fill="white" size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex cursor-none items-center gap-2 duration-250 ease-in-out hover:-translate-y-1"
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
