import type {AppProps} from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {AnimatePresence} from "framer-motion";

import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/navbar.css";
import "../styles/backgrounds.css";
import "../styles/index.css";
import "../styles/glasscard.css";
import "../styles/opencard.css";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <>
            <div className={"global__guard__min"}>You can not view this site</div>
            <div className={"global__guard__max"}>
                <Navbar/>
                <AnimatePresence initial={true} mode={"sync"}>
                    <Component key={router.pathname} {...pageProps} />
                </AnimatePresence>
                <Footer/>
            </div>
        </>
    );
}
