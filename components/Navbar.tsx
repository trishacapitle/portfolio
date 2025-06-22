"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
	useGSAP(() => {
		gsap.from (".navbar",{ 
			opacity: 0,
			duration: 1.5,
})
	})

	return (
    <div className="navbar flex h-16 w-full items-center justify-center p-6 md:p-8">
      <div className="font-primary text-xl text-white">
        <span className="text-(--grey)">Ash</span>Dev
      </div>
      {/* <ul className="font-secondary flex gap-6 text-xs text-(--grey) md:text-sm">
        <li className="py-2 duration-100 ease-in-out hover:text-white">
          About
        </li>
        <li className="py-2 duration-100 ease-in-out hover:text-white">
          Stack
        </li>
        <li className="py-2 duration-100 ease-in-out hover:text-white">
          Projects
        </li>
        <li className="py-2 duration-100 ease-in-out hover:text-white">
          Contact
        </li>
      </ul> */}
    </div>
  );
};

export default Navbar;
