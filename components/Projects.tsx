import React from 'react'

const Projects = () => {
  return (
		<div className="flex flex-col h-screen w-full gap-6">
			<div className="font-primary text-white text-6xl p-6 md:p-8">
				Featured <span className="text-(--grey)">Projects</span>
			</div>
			<div className="flex">
				<button>-</button>
				<div className="">
					<div className="">card</div>
					<div className="">text</div>
				</div>
				<button>-</button>
			</div>
			<div>form</div>
		</div>
	);
}

export default Projects