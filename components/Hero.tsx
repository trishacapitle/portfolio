import Image from "next/image";
import ContactIcon from "./ui/ContactIcon";
import LinkedInIcon from "./ui/LinkedInIcon";
import GithubIcon from "./ui/GithubIcon";
import * as motion from "motion/react-client";
import Spline from "@splinetool/react-spline/next";

const Hero = () => {
	return (
		<div className={`flex h-full w-full snap-center`}>
			<div className="flex flex-col flex-1 justify-center">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeIn", duration: 1.5 }}
					className="text-white font-primary text-5xl"
				>
					Hi, I&apos;m
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeIn", duration: 1.5 }}
					className="text-white font-primary text-8xl tracking-wide relative flex"
				>
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ delay: 3, duration: 1.5, ease: "easeIn" }}
						className="text-(--grey)"
					>
						TRI
					</motion.div>
					<motion.div
						animate={{ color: "#fff" }}
						transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
						className="text-(--grey)"
					>
						S
					</motion.div>
					<motion.div
						animate={{ color: "#fff" }}
						transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
						className="text-(--grey)"
					>
						H
					</motion.div>
					<motion.div
						animate={{ x: -120, color: "#fff" }}
						transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
						className="text-(--grey)"
					>
						A
					</motion.div>
				</motion.div>{" "}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, ease: "easeIn" }}
					className="text-white font-primary text-8xl tracking-wide"
				>
					CAPITLE
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -160 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: "easeIn", duration: 1.5 }}
					className="text-white font-secondary font-normal text-xl"
				>
					A Front-End Developer crafting modern, responsive websites with clean,
					efficient code, and intuitive design. Constantly exploring emerging
					technologies and innovative approaches to push the boundaries of web
					development.
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -160 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: "easeIn", duration: 1.5 }}
					className="flex mt-4 items-center gap-6"
				>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="font-primary text-white text-3xl flex items-center gap-4 bg-gray-600/25 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg px-6 hover:bg-gray-400/25 transition-colors duration-300 leading-0 pb-4 pt-5"
					>
						Contact Me
						<ContactIcon width="25" height="25" />
					</motion.button>
					<motion.a
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						href="https://www.linkedin.com/in/trisha-capitle/"
						target="_blank"
					>
						<LinkedInIcon width="40" height="40" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						href="github.com/trishacapitle"
						target="_blank"
					>
						<GithubIcon width="40" height="40" />
					</motion.a>
				</motion.div>
			</div>
			<div className="flex flex-1 items-center relative">
				<div className="absolute w-full h-full z-0 bottom-0 left-0">
					<Spline scene="https://prod.spline.design/fharqCcj8eCOuHbC/scene.splinecode" />
				</div>
				<Image
					src="/portrait.png"
					width={800}
					height={800}
					alt="Picture of the author"
					className="z-99"
				/>
			</div>
		</div>
	);
};

export default Hero;
