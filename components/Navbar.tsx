import React from "react";

const Navbar = () => {
	return (
		<div className="w-full h-16 justify-between items-center flex p-6 md:p-8">
			<div className="font-primary text-white text-xl">
				<span className="text-(--grey)">Ash</span>Dev
			</div>
			<ul className="flex gap-6 text-xs md:text-sm font-secondary text-(--grey) ">
				<li className="hover:text-white duration-100 ease-in-out py-2">
					About
				</li>
				<li className="hover:text-white duration-100 ease-in-out py-2">
					Experience
				</li>
				<li className="hover:text-white duration-100 ease-in-out py-2">
					Projects
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
