import React from 'react'
import ContactIcon from './ui/ContactIcon';
import LinkedInIcon from './ui/LinkedInIcon';
import GithubIcon from './ui/GithubIcon';
import * as motion from 'motion/react-client';


const Hero = () => {
  return (
		<div className="flex h-screen w-full">
			<div className="flex flex-col flex-1/2 justify-center">
				<div className="text-white font-primary text-5xl">Hi, I&apos;m</div>
				<div className="text-white font-primary text-8xl tracking-wide">
					<span className="text-(--grey) ">TRI</span>SHA CAPITLE
				</div>
        <motion.div initial={{ opacity: 0 }} animate={{opacity:1}} transition={{ease: "easeIn", duration: 1}} className="text-white font-secondary font-normal text-xl">
					A Front-End Developer crafting modern, responsive websites with clean,
					efficient code, and intuitive design. Constantly exploring emerging
					technologies and innovative approaches to push the boundaries of web
					development.
				</motion.div>
				<div className="flex mt-4 items-center gap-6">
					<button className="font-primary text-white text-3xl flex items-center gap-4 bg-gray-600/25 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-lg px-6 hover:bg-gray-400/25 transition-colors duration-300 leading-0 pb-4 pt-5">
						Contact Me
						<ContactIcon width="25" height="25" />
					</button>
					<a href="https://www.linkedin.com/in/trisha-capitle/" target='_blank' rel="noopener noreferrer">
						<LinkedInIcon width="40" height="40" />
					</a>
					<a href="github.com/trishacapitle" target='_blank' >
						<GithubIcon width="40" height="40" />
					</a>
				</div>
			</div>
			<div className="flex flex-1/2 items-center">My picture here</div>
		</div>
	);
}

export default Hero