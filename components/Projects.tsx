import ProjectCard from "./ui/ProjectCard";

const Projects = () => {

  return (
    <div className="flex h-fit w-full flex-col gap-6 md:h-screen">
      <div className="font-primary p-6 text-6xl text-white md:p-8">
        <span className="text-(--grey)">Featured</span> Projects
      </div>
      <div className="flex justify-center w-full">
        <ProjectCard />
      </div>
    </div>
  );
}
export default Projects;
