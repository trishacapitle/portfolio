import Image from "next/image";

const Projects = () => {
  const projects = {
    "project1": {
      title: "Project One",
      description: "This is a description of project one. It does many things and is very useful.",
      stack: ["React", "Node.js", "Express"],
      image: "/portrait.png",
      tags: ["web", "app"]
    },
    "project2": {
      title: "Project Two",
      description: "This is a description of project two. It is even better than the first one.",
      stack: ["Vue", "Django"],
      image: "/path/to/image2.jpg",
      tags: ["web"]
    }
  }

  const {project1:{title, description, stack, image, tags}} = projects;

  return (
    <div className="flex h-fit w-full flex-col gap-6 md:h-screen">
      <div className="font-primary p-6 text-6xl text-white md:p-8">
        <span className="text-(--grey)">Featured</span> Projects
      </div>
      <div className="m-4 flex flex-1 justify-center gap-2">
        <div className="font-secondary flex h-fit w-[90vw] max-w-3xl flex-col items-center gap-4 rounded-xl border border-gray-500 bg-gray-600/25 p-6 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:flex-row md:p-8">
          <div className="relative h-100 w-full rounded-xl bg-[#1A1A1A] md:w-100">
            <Image src={image} alt={`${title} preview`} fill className="object-cover" />
            <p className="absolute rounded-full bg-[#0A0A0A] p-2 text-xs">
              {tags}
            </p>
          </div>
          <div className="info tracking-wide md:h-full md:max-w-[40%]">
            <p>{title}</p>
            <p>{description}</p>
            <div>
              <p>Project Info</p>
              <div>
                <p>Stack</p>
                <p>{stack}</p>
              </div>
            </div>
            <div className="uppercase">
              <p>Live Demo arrow here</p>
              <p>See on Github icon here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
