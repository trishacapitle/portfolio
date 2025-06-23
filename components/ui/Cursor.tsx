import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".custom-cursor");

    circles.forEach(function (circle) {
      (circle as HTMLElement & { x: number; y: number }).x = 0;
      (circle as HTMLElement & { x: number; y: number }).y = 0;
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        const c = circle as HTMLElement & { x: number; y: number };
        c.style.left = x - 12 + "px";
        c.style.top = y - 12 + "px";

        c.style.scale = ((circles.length - index) / circles.length).toString();

        c.x = x;
        c.y = y;

        const nextCircle = (circles[index + 1] || circles[0]) as HTMLElement & { x: number; y: number };
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
})

  return (
    <>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
      <div id="custom-cursor" className="custom-cursor"></div>
    </>
  );
}

export default Cursor