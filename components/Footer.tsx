import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr className="border border-(--grey)" />
      <p className="font-secondary text-center text-(--grey)">
        Designed in <span className="text-white">Figma</span>, coded on{" "}
        <span className="text-white">Visual Studio Code</span>. Built with{" "}
        <span className="text-white">Next.js</span> and{" "}
        <span className="text-white">Tailwind CSS</span>. Animations are brewed on{" "}
        <span className="text-white">GSAP</span>. Deployed with{" "}
        <span className="text-white">Vercel</span>.
      </p>
    </div>
  );
}

export default Footer