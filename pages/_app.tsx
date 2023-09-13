import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import "../styles/glasscard.css";
import "../styles/backgrounds.css";
import "../styles/opencard.css";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence initial={true} mode={"sync"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
