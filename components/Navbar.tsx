import {useEffect, useRef} from "react";
import Link from "next/link";
import {gsap} from "gsap";
import Flip from "gsap/dist/Flip";

// function for toggling dark mode
gsap.registerPlugin(Flip);

const Navbar = () => {
    const links = useRef(new Array(3));
    const activeNav = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Put colors on initial load
        let path = window.location.pathname.substring(1);
        if (path === "") {
            gsap.to(".navbar__link__main", {color: "rgb(34, 211, 238)"});
        } else if (path === "projects") {
            gsap.to(".navbar__link__projects", {color: "#c90000"});
            gsap.to(".colorchanger", {backgroundColor: "#800000"});
            gsap.to(".navbar", {"--border-color": "#800000"});
            gsap.to(".navbar__slider", {backgroundColor: "#c90000"});
            gsap.to(".textfootercolor", {color: "#e0e0e0"});
        } else if (path === "about") {
            gsap.to(".navbar__link__about", {color: "#8860d0"});
            gsap.to(".colorchanger", {backgroundColor: "#c1c8e4"});

            gsap.to(".navbar", {"--border-color": "#8860d0"});
            gsap.to(".navbar__slider", {backgroundColor: "#8860d0"});
            gsap.to(".textfootercolor", {color: "#000000"});
        }
    }, []);

    useEffect(() => {
        const state = Flip.getState(activeNav.current);
        let path = window.location.pathname.substring(1);
        if (path === "") {

            links.current[0].appendChild(activeNav.current);
        } else if (path === "projects") {
            links.current[1].appendChild(activeNav.current);
        } else if (path === "about") {
            links.current[2].appendChild(activeNav.current);
        }

        Flip.from(state, {duration: 0.8, ease: "elastic.out(1, 0.5)"});
    }, [activeNav]);

    const handleClick = (e: Element) => {
        links.current.forEach((link) => {
            gsap.to(".navbar__link__main", {color: "#e0e0e0"});
            gsap.to(".navbar__link__projects", {color: "#e0e0e0"});
            gsap.to(".navbar__link__about", {color: "#e0e0e0"});
        });

        links.current.forEach((link) => {
            if (link === e) {
                if (e === links.current[0]) {
                    gsap.to(".navbar__link__main", {color: "rgb(34, 211, 238)"});
                } else if (e === links.current[1]) {
                    gsap.to(".navbar__link__projects", {color: "#c90000"});
                } else if (e === links.current[2]) {
                    gsap.to(".navbar__link__about", {color: "#8860d0"});
                }
            }
        });

        //move line
        const state = Flip.getState(activeNav.current);

        if (activeNav.current !== null) {
            e.appendChild(activeNav.current);
        }
        Flip.from(state, {duration: 0.8, ease: "elastic.out(1, 0.5)"});
        //ease: "power2.inOut"

        //If element is the main page, change the color of the footer to blue, if the element is of the project page, change the color to red, if the element is of the experience page, change the color to green

        if (e === links.current[0]) {
            gsap.to(".colorchanger", {backgroundColor: "#00ADB5"});

            gsap.to(".navbar", {"--border-color": "#00ADB5"});
            gsap.to(".navbar__slider", {backgroundColor: "rgb(34, 211, 238)"});
            gsap.to(".textfootercolor", {color: "#000000"});
        } else if (e === links.current[1]) {
            gsap.to(".colorchanger", {backgroundColor: "#800000"});

            gsap.to(".navbar", {"--border-color": "#800000"});
            gsap.to(".navbar__slider", {backgroundColor: "#c90000"});
            gsap.to(".textfootercolor", {color: "#e0e0e0"});
        } else if (e === links.current[2]) {
            gsap.to(".colorchanger", {backgroundColor: "#c1c8e4"});

            gsap.to(".navbar", {"--border-color": "#8860d0"});
            gsap.to(".navbar__slider", {backgroundColor: "#8860d0"});
            gsap.to(".textfootercolor", {color: "#000000"});
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar__ul text-main-fourth">
                <div
                    ref={(el) => (links.current[0] = el)}
                    className="navbar__div"
                >
                    <li>
                        <Link className={"navbar__link navbar__link__main"}
                              onClick={() => handleClick(links.current[0])} href="/">
                            Main
                        </Link>
                    </li>
                    <div
                        ref={activeNav}
                        className="navbar__slider"
                    ></div>
                </div>

                <div
                    ref={(el) => (links.current[1] = el)}
                    className="navbar__div"
                >
                    <li>
                        <Link className={"navbar__link navbar__link__projects"}
                              onClick={() => handleClick(links.current[1])}
                              href="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                </div>
                <div
                    ref={(el) => (links.current[2] = el)}
                    className="navbar__div"
                >
                    <li>
                        <Link className={"navbar__link navbar__link__about"}
                              onClick={() => handleClick(links.current[2])}
                              href="/about"
                        >
                            About
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
