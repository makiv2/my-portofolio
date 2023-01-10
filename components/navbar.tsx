import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";

// function for toggling dark mode
gsap.registerPlugin(Flip);

function Navbar() {
  const links = useRef(new Array(3));
  const activeNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //set active nav
    gsap.to(links.current[0], { color: "rgb(34, 211, 238)" });
    console.log("test");
  }, []);

  const handleClick = (e: Element) => {
    links.current.forEach((link) => {
      gsap.to(link, { color: "#e0e0e0" });
    });

    links.current.forEach((link) => {
      if (link === e) {
        gsap.to(link, { color: "rgb(34, 211, 238)" });
      }
    });

    //move line
    const state = Flip.getState(activeNav.current);

    if (activeNav.current !== null) {
      console.log(e);
      e.appendChild(activeNav.current);
    }
    Flip.from(state, { duration: 0.8, ease: "elastic.out(1, 0.5)" });
    //ease: "power2.inOut"

    //If element is the main page, change the color of the footer to blue, if the element is of the projects page, change the color to red, if the element is of the experience page, change the color to green
  
    if (e === links.current[0]) {
      gsap.to(".footercolorchanger", { backgroundColor: "#00ADB5" });
    } else if (e === links.current[1]) {
      gsap.to(".footercolorchanger", { backgroundColor: "#FF0000" });
    } else if (e === links.current[2]) {
      gsap.to(".footercolorchanger", { backgroundColor: "#8FCE00" });
    }

  };


  return (
    <div className="border-t-4 border-custom-third border-solid z-20 relative">
      <nav className="flex justify-center">
        <ul className="font-rowdies px-12 pb-6 pt-8 flex list-none gap-20 text-2xl text-main-fourth navbotborder shadow-main-third mt-2">
          <div
            ref={(el) => (links.current[0] = el)}
            className="nav-item relative"
          >
            <li>
              <Link onClick={() => handleClick(links.current[0])} href="/">
                Main
              </Link>
            </li>
            <div
              ref={activeNav}
              className="active-nav h-1 bg-cyan-400 rounded-2xl absolute left-0 -bottom-1 w-full"
            ></div>
          </div>

          <div
            ref={(el) => (links.current[1] = el)}
            className="nav-item relative"
          >
            <li>
              <Link
                onClick={() => handleClick(links.current[1])}
                href="/projects"
              >
                Projects
              </Link>
            </li>
          </div>
          <div
            ref={(el) => (links.current[2] = el)}
            className="nav-item relative"
          >
            <li>
              <Link
                onClick={() => handleClick(links.current[2])}
                href="/experience"
              >
                Experience
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      {
        // Buttion for toggling dark mode with animation
      }
    </div>
  );
}

export default Navbar;
