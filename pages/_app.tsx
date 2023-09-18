import type {AppProps} from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {AnimatePresence} from "framer-motion";

import "../styles/globals.css";
import "../styles/index.css";
import "../styles/project.css";
import "../styles/experience.css";
import "../styles/footer.css";
import "../styles/navbar.css";
import "../styles/backgrounds.css";
import "../styles/glasscard.css";
import "../styles/opencard.css";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <>
            <Navbar/>
            {/*<div className={"guard_pc"}>*/}
            {/*    <AnimatePresence initial={true} mode={"sync"}>*/}
            {/*        <Component key={router.pathname} {...pageProps} />*/}
            {/*    </AnimatePresence>*/}
            {/*</div>*/}
            {/*<div className={"guard_mobile"}>*/}
                <Component key={router.pathname} {...pageProps} />
            {/*</div>*/}

            <Footer/>
        </>
    );
}
