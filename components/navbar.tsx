import lightmode from "../public/lightmode.svg";
import darkmode from "../public/darkmode.svg";
import Image from "next/image";
import { use, useEffect, useRef } from "react";
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
    console.log('test')
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
    Flip.from(state, { duration: 0.8,  ease: "elastic.out(1, 0.5)"});
    //ease: "power2.inOut"
  };

  return (
    <div className="border-t-4 border-custom-third border-solid z-20 relative">
      <nav className="flex justify-center">
        <ul className="font-rowdies px-12 py-8 flex list-none gap-20 text-2xl text-main-fourth rounded-3xl shadow-md mb-4 mt-2">



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

          <div ref={(el) => (links.current[1] = el)} className="nav-item relative">
            <li>
              <Link onClick={() => handleClick(links.current[1])} href="/projects">
                Projects
              </Link>
            </li>
          </div>
          <div ref={(el) => (links.current[2] = el)} className="nav-item relative">
            <li>
              <Link onClick={() => handleClick(links.current[2])} href="/experience">
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
