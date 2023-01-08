import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
        <Navbar />
        <AnimatePresence initial={false} mode={'sync'} >
        <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        <Footer />
    </>
  );
}
