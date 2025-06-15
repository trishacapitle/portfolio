"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
	useGSAP(() => {
		gsap.from (".navbar",{ 
			opacity: 0,
			y: -20,
			duration: 1.5,
})
	})

	return (
		<div className="navbar w-full h-16 justify-between items-center flex p-6 md:p-8">
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
