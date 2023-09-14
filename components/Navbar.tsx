import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";

// function for toggling dark mode
gsap.registerPlugin(Flip);

const Navbar = () => {
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
        if (e === links.current[0]) {
          gsap.to(link, { color: "rgb(34, 211, 238)" });
        } else if (e === links.current[1]) {
          gsap.to(link, { color: "#c90000" });
        } else if (e === links.current[2]) {
          gsap.to(link, { color: "#8860d0" });
        }
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

    //If element is the main page, change the color of the footer to blue, if the element is of the project page, change the color to red, if the element is of the experience page, change the color to green

    if (e === links.current[0]) {
      gsap.to(".colorchanger", { backgroundColor: "#00ADB5" });

      gsap.to(".navbotborder", { borderColor: "#00ADB5" });
      gsap.to(".bordercolorchanger", { borderColor: "#00ADB5" });
      gsap.to(".sliderColor", { backgroundColor: "rgb(34, 211, 238)" });
      gsap.to(".textfootercolor", { color: "#000000" });
    } else if (e === links.current[1]) {
      gsap.to(".colorchanger", { backgroundColor: "#800000" });

      gsap.to(".navbotborder", { borderColor: "#800000" });
      gsap.to(".bordercolorchanger", { borderColor: "#800000" });
      gsap.to(".sliderColor", { backgroundColor: "#c90000" });
      gsap.to(".textfootercolor", { color: "#e0e0e0" });
    } else if (e === links.current[2]) {
      gsap.to(".colorchanger", { backgroundColor: "#c1c8e4" });

      gsap.to(".navbotborder", { borderColor: "#8860d0" });
      gsap.to(".bordercolorchanger", { borderColor: "#8860d0" });
      gsap.to(".sliderColor", { backgroundColor: "#8860d0" });
      gsap.to(".textfootercolor", { color: "#000000" });
    }
  };

  return (
      <nav className="flex justify-center aspect125 border-t-4 bordercolorchanger border-solid z-20 relative ">
        <ul className="font-rowdies px-12 pb-6 pt-8 flex list-none gap-20 text-2xl text-main-fourth navbotborder mt-2 ">
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
              className="active-nav h-1 sliderColor rounded-2xl absolute left-0 -bottom-1 w-full"
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
  );
}

export default Navbar;
