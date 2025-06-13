"use client";

import Image from "next/image";
import {
	BiLogoLinkedinSquare,
	BiLogoGithub,
	BiPaperPlane,
} from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(".hi", {
			y: -50,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
		})
			.from(
				".trisha",
				{
					y: -50,
					opacity: 0,
					duration: 1,
					ease: "power2.out",
				},
				"-=0.5"
			)
			.from(
				".capitle",
				{
					y: -50,
					opacity: 0,
					duration: 1,
					ease: "power2.out",
				},
				"-=0.5"
			)
			.from(
				".description",
				{
					y: -50,
					opacity: 0,
					duration: 1,
					ease: "power2.out",
				},
				"-=0.5"
			)
			.from(
				".actions",
				{
					y: -50,
					opacity: 0,
					duration: 1,
					ease: "power2.out",
				},
				"-=0.5"
			)
			.to(
				".tri",
				{
					delay: 2,
					opacity: 0,
				},
				"-=1"
			)
			.to(
				".a",
				{
					x: -120,
					color: "#fff",
					ease: "elastic",
					duration: 1.5,
				},
				"-=0.5"
			)
			.to(
				".s, .h",
				{
					color: "#fff",
					duration: 1,
				},
				"<"
			)
			.to(
				".capitle",
				{
					color: "var(--grey)",
					duration: 1,
				},
				"<"
			);
	}, []);

	return (
		<div className="flex flex-col md:flex-row h-full w-full">
			{/* Left Column */}
			<div className="flex flex-col flex-1 justify-center m-4 md:p-6 z-10">
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

				<div className="description text-white font-secondary font-normal text-base md:text-lg">
					A Front-End Developer crafting modern, responsive websites with clean,
					efficient code, and intuitive design. Constantly exploring emerging
					technologies and innovative approaches to push the boundaries of web
					development.
				</div>

				<div className="actions flex mt-4 items-center gap-3 md:gap-6">
					<button className="button font-primary text-white text-3xl flex items-center gap-2 md:gap-4 bg-gray-600/25 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg p-4 md:px-6 hover:bg-gray-400/25 transition-colors duration-300 leading-0">
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
			<div className="flex-1 relative">
				<Image
					src="/portrait.png"
					width={800}
					height={800}
					alt="Picture of the author"
					className="object-cover w-full h-full absolute bottom-0"
				/>
			</div>
		</div>
	);
};

export default Hero;
