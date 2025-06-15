import React from "react";

const Projects = () => {
	return (
		<div className="flex flex-col h-screen w-full gap-6">
			<div className="font-primary text-white text-6xl p-6 md:p-8">
				Featured <span className="text-(--grey)">Projects</span>
			</div>
			<div className="flex text-white">
				<button>-</button>
				<div className=" flex flex-col md:flex-row gap-4 font-secondary">
					<div className="relative w-600 h-600 bg-[#1A1A1A]">image here
						<p className="absolute rounded-lg bg-[#0A0A0A]">this is a tag</p>
					</div>
					<div className="">
						<h3>title here</h3>
						<p>description here</p>
						<div>
							<p>Project Info</p>
							<div>
								<p>Stack</p>
								<p>Stack here</p>
							</div>
						</div>
						<div>
							<p>Live Demo arrow here</p>
							<p>See on Github icon here</p>
						</div>
					</div>
				</div>
				<button>-</button>
			</div>
			<div>form</div>
		</div>
	);
};

export default Projects;
