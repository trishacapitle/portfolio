import React from "react";

const Navbar = () => {
	return (
		<div className="w-full h-10 justify-between items-center flex p-4 md:p-6 snap-center">
			<div className="font-primary text-white">
				<span className="text-(--grey)">Ash</span>Dev
			</div>
			<div className="flex gap-6 text-xs md:text-sm font-secondary text-(--grey)">
				<p>About</p>
				<p>Experience</p>
				<p>Projects</p>
				<p>Contact</p>
			</div>
		</div>
	);
};

export default Navbar;
