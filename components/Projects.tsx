import React from "react";
import {
	BiChevronLeft,
	BiChevronRight
} from "react-icons/bi";

const Projects = () => {
	return (
		<div className="flex flex-col h-screen w-full gap-6">
			<div className="font-primary text-white text-6xl p-6 md:p-8">
				Featured <span className="text-(--grey)">Projects</span>
			</div>
			<div className="flex flex-1 text-white justify-center items-center gap-6 md:gap-10">
				<button className="flex w-10 h-10 bg-[#1A1A1A] rounded-full items-center justify-center">
					<BiChevronLeft size={30} />
				</button>
				<div className="flex flex-col md:flex-row gap-4 font-secondary w-full">
					<div className="relative w-[80dvw] h-[80dvw] max-w-[600px] max-h-[600px]  rounded-xl bg-[#1A1A1A]">
						image here
						<p className="absolute rounded-full text-xs bg-[#0A0A0A] p-2">
							this is a tag
						</p>
					</div>
					<div className="info flex-1 tracking-wide">
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
				<button className="flex w-10 h-10 bg-[#1A1A1A] rounded-full justify-center items-center">
					<BiChevronRight size={30} />
				</button>
			</div>
			<div>form</div>
		</div>
	);
};

export default Projects;
