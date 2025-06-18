import TechStack from "@/components/TechStack";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className=" bg-[#121212] flex flex-col justify-center items-center overflow-hidden mx-auto">
			<div className="max-w-7xl w-screen no-scrollbar">
				<Navbar />
				<Hero />
				<TechStack />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}
