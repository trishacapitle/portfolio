import React from "react";

const Projects = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-6">
      <div className="font-primary p-6 text-6xl text-white md:p-8">
        Featured <span className="text-(--grey)">Projects</span>
      </div>
      <div className="m-4 flex gap-2 justify-center items-center flex-1">
        <div className="font-secondary flex flex-col items-center gap-4 rounded-xl border border-gray-500 bg-gray-600/25 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:flex-row md:p-6">
          <div className="relative h-[80vw] max-h-[400px] w-[80vw] max-w-[400px] rounded-xl bg-[#1A1A1A]">
            image here
            <p className="absolute rounded-full bg-[#0A0A0A] p-2 text-xs">
              this is a tag
            </p>
          </div>
          <div className="info h-[80vw] max-h-[400px] w-[80vw] max-w-[400px] tracking-wide">
            <p>title here</p>
            <p>description here</p>
            <div>
              <p>Project Info</p>
              <div>
                <p>Stack</p>
                <p>Stack here</p>
              </div>
            </div>
            <div className="uppercase">
              <p>Live Demo arrow here</p>
              <p>See on Github icon here</p>
            </div>
          </div>
        </div>
      </div>
      <div>form</div>
    </div>
  );
};

export default Projects;
