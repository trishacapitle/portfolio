"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".navbar", {
      opacity: 0,
      duration: 1.5,
    });
  });

  return (
    <div className="navbar flex h-16 w-full items-center justify-center pt-3 md:pt-4">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 520.000000 378.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          <path
            d="M1916 2888 c-8 -13 -94 -219 -191 -458 -353 -872 -534 -1316 -554
-1363 -26 -61 -27 -93 -2 -107 13 -6 238 -10 660 -10 l641 0 15 24 c15 22 11
34 -66 227 -45 112 -86 210 -92 217 -7 9 -65 12 -226 12 -227 0 -242 3 -241
45 1 39 325 818 347 832 17 12 23 11 41 -4 13 -11 118 -262 282 -673 144 -360
269 -661 278 -668 13 -11 61 -13 227 -9 183 4 222 8 305 30 362 96 637 373
727 733 27 107 24 343 -5 454 -97 368 -401 654 -772 724 -103 20 -419 23 -438
4 -7 -7 -12 -22 -12 -33 0 -35 150 -398 172 -417 16 -14 38 -18 98 -18 140 0
271 -59 372 -167 139 -150 168 -384 70 -567 -37 -71 -145 -175 -214 -209 -69
-33 -172 -60 -197 -52 -22 7 2 -50 -333 785 -148 371 -275 678 -282 682 -6 4
-143 8 -303 8 -292 0 -293 0 -307 -22z"
          />
        </g>
      </svg>
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
