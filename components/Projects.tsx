import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
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
      stack: ["Vue, Django"],
      image: "/portrait.png",
      tags: ["Conceptual Work"],
      preview: "https://example.com/preview1",
      github: "https://github.com/example/project-two",
    },
  };


  return (
    <div className="flex h-fit w-full flex-col gap-6 md:h-screen">
      <div className="font-primary p-6 text-6xl text-white md:p-8">
        <span className="text-(--grey)">Featured</span> Projects
      </div>
      <div className="flex flex-col w-full items-center gap-4">
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard key={key} {...project} stack={project.stack.join(", ")} tags={project.tags.join(", ")} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
