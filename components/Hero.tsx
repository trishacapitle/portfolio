"use client";

import Image from "next/image";
import {
	BiLogoLinkedinSquare,
	BiLogoGithub,
	BiPaperPlane,
	BiArrowToBottom
} from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(useGSAP, ScrambleTextPlugin);

const Hero = () => {
	useGSAP(() => {
		const descriptionText = `
			A Front‑End Developer crafting modern, responsive websites with clean,
			efficient code, and intuitive design. Constantly exploring emerging
			technologies and innovative approaches to push the boundaries of web
			development.
		`.trim();

		const tl = gsap.timeline();

		tl.fromTo(
			".hi",
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out" }
		)
			.fromTo(
				".trisha",
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1, ease: "power2.out" },
				"-=0.5"
			)
			.fromTo(
				".capitle",
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1, ease: "power2.out" },
				"-=0.5"
			)
			.fromTo(
				".description",
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 2, ease: "power2.out" },
				"-=0.5"
			)
			.to(
				".description",
				{
					duration: 3,
					scrambleText: {
						text: descriptionText,
						chars: "upperAndLowerCase",
						speed: 0.2,
					},
				},
				"<"
			)
			.fromTo(
				".actions",
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1, ease: "power2.out" },
				"-=0.5"
			)
			.to(".tri", { delay: 2, opacity: 0 }, "-=1")
			.to(
				".a",
				{ x: -120, color: "#fff", ease: "elastic", duration: 1.5 },
				"-=0.5"
			)
			.to(".s, .h", { color: "#fff", duration: 1 }, "<");
	}, []);
	

	return (
		<div className="flex flex-col md:flex-row h-full w-full justify-center">
			{/* Left Column */}
			<div className="flex flex-col justify-center pl-6 md:pl-8 md:w-[50%] h-fit md:h-full">
				<div className="hi text-white font-primary text-3xl md:text-5xl">
					Hi, I&apos;m
				</div>

				<div className="flex gap-0 md:gap-2 flex-col md:flex-row">
					<div className="trisha font-primary text-8xl tracking-wide relative flex">
						<div className="tri headline-part1 text-(--grey)">TRI</div>
						<div className="s text-(--grey)">S</div>
						<div className="h text-(--grey)">H</div>
						<div className="a text-(--grey)">A</div>
					</div>
					<div className="capitle text-white font-primary text-8xl tracking-wide">
						CAPITLE
					</div>
				</div>

				<div className="description text-white font-secondary font-normal text-base md:text-lg"></div>

				<div className="actions flex mt-4 items-center gap-2 md:gap-3">
					<button className="button font-primary text-white text-2xl md:text-3xl flex items-center gap-2 md:gap-4 bg-gray-600/25 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg p-3 md:p-4 md:px-6 hover:bg-gray-400/25 transition-colors duration-300 leading-0">
						Contact Me
						<BiPaperPlane size={30} />
					</button>
					<a
						className="button"
						href="https://www.linkedin.com/in/trisha-capitle/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BiLogoLinkedinSquare size={40} color="white" />
					</a>
					<a
						className="button"
						href="https://github.com/trishacapitle"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BiLogoGithub size={40} color="white" />
					</a>
				</div>
			</div>

			{/* Right Column */}
			<div className="w-full h-[50%] md:w-[50%] md:h-full relative">
				<Image
					src="/portrait.png"
					width={800}
					height={800}
					alt="Picture of the author"
					className="object-cover w-full h-full absolute bottom-0"
				/>
			</div>
			<button className="font-primary text-white text-2xl md:text-3xl flex items-center gap-2 md:gap-4 bg-gray-600/25 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg p-3 md:p-4 md:px-6 hover:bg-gray-400/25 transition-colors duration-300 absolute bottom-20 right-20 z-99">
				Resume
				<BiArrowToBottom size={30} color="white" />
			</button>
		</div>
	);
};

export default Hero;
