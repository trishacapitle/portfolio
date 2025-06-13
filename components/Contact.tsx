import React from "react";

const Contact = () => {
	return (
		<div className="flex h-screen w-full snap-center">
			<div className="font-primary text-white mt-10">
				<div className="text-6xl">
					<span className="text-(--grey)">Let&apos;s</span> Connect
				</div>
				<p className="text-(--grey) font-secondary">
					Say hello at{" "}
					<span className="text-white underline">
						trishacapitle01@gmail.com
					</span>
				</p>
				<p className="text-(--grey) font-secondary">
					For more info, here&apos;s my{" "}
					<span className="text-white underline">resume</span>
				</p>
				<div className="flex gap-6 mt-10">
				</div>
			</div>
		</div>
	);
};

export default Contact;
