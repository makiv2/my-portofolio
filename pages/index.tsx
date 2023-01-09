import Head from "next/head";
import { Inter } from "@next/font/google";
import Socials from "../components/socials";
import Footer from "../components/footer";
import { motion as m } from "framer-motion";
import Glasscard from "../components/glasscard";

const inter = Inter({ subsets: ["latin"] });

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 w-full h-85.7p bg-green-400 lg:px-32 px-16"
    >
      <Head>
        <title>Matija Popovic Portofolio</title>
        <meta name="description" content="Made my wwww.github.com/makiv2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mt-36 overflow-hidden absolute">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.25, duration: 1, type: "spring" }}
            className="text-6xl text-center lg:text-left lg:text-8xl pb-6 px-4 font-rowdies"
          >
            Matija Popovic
          </m.h1>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="bar bg-cyan-700"
          ></m.div>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.65, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="absolute bottom-0 left-0 pl-14 pr-24  bottom10 topthird w-1/2"
        >
          <Glasscard></Glasscard>
        </m.div>
      </main>
    </m.div>
  );
}
