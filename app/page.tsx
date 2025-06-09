import StackExp from "@/components/StackExp";
import Hero from "../components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<main className="relative bg-[#121212] flex flex-col justify-center items-center overflow-hidden mx-auto">
			<div className="max-w-6xl w-full h-screen snap-y overflow-scroll no-scrollbar scroll-smooth snap-proximity">
				<Hero />
				<StackExp />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}
