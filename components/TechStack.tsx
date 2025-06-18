"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

const TechStack = () => {
	const icons = [
		"html",
		"css",
		"javascript",
		"typescript",
		"gsap",
		"react",
		"next",
		"tailwind",
		"shadcn",
		"electron",
		"vite",
		"vitest",
		"git",
		"ghub",
		"vercel",
		"figma",
		"webflow",
		"shopify",
	];

	gsap.registerPlugin(useGSAP, ScrollTrigger);

	const container = useRef(null);

	useGSAP(
		() => {
			gsap.set(".icon, .subtitle", {
				opacity: 0,
				y: 40
			});

			gsap.to(".icon", {
				scrollTrigger: {
					trigger: ".icon",
					start: "top 80%",
					end:"top 40%"
				},
				opacity: 1,
				duration: 1,
				ease: "power1.in",
				stagger: 0.1,
			});

			gsap.to(".subtitle", {
				scrollTrigger: {
					trigger: ".subtitle",
				},
				y: 0,
				opacity: 1,
				duration: 2,
				ease: "power1.in",
			});

			gsap.from(".title", {
				scrollTrigger: {
					trigger: ".title",
				},
				opacity: 0,
				x: 400,
				duration: 1,
			});
		},
		{ scope: container }
	)
	return (
		<div ref={container} className="container relative flex flex-col h-fit lg:h-screen w-full">
			<div className="title font-primary text-white text-6xl p-6 md:p-8">
				<span className="text-(--grey)">Tech</span> Stack
			</div>

			<div
				
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4"
			>
				{icons.map((icon) => (
					<div
						key={icon}
						className="icon flex items-center p-4 bg-gray-600/10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg hover:bg-gray-400/25 transition-colors duration-300 justify-center h-40"
					>
						<Image
							src={`/${icon}.svg`}
							width={80}
							height={80}
							alt={icon}
							className="object-cover justify-self-center"
							draggable={false}
						/>
					</div>
				))}
			</div>
			<div className="subtitle font-secondary text-white text-lg md:text-xl text-center flex items-center p-12 md:p-20">
				Adaptable and quick to master new tools and frameworks, I ensure my tech
				stack evolves with industry trends and continuously refine my approach
				to build efficient, modern websites.
			</div>
		</div>
	);
};

export default TechStack;
