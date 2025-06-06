import Hero from '../components/Hero';

export default function Home() {
  return (
		<main className="relative bg-[#121212] flex flex-col justify-center items-center overflow-hidden mx-auto">
			<div className="max-w-7xl w-full h-screen">
				<Hero />
			</div>
		</main>
	);
}
