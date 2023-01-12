import Head from "next/head";
import { Inter } from "@next/font/google";
import Socials from "../components/socials";
import Footer from "../components/footer";
import { motion as m } from "framer-motion";
import Glasscard from "../components/glasscard";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor si amet consectetur adipisicing elit. Lorem ipsum dolor sit'

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
      className="text-main-fourth absolute top-0 w-full h-85.7p mainbackground spacer lg:px-32 px-16"
    >
      <Head>
        <title>Matija Popovic Portofolio</title>
        <meta name="description" content="Made my wwww.github.com/makiv2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overflow-hidden absolute margintop120">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.25, duration: 1, type: "spring" }}
            className="text-6xl text-center lg:text-left lg:text-8xl pb-6 px-4 font-lobster "
          >
            Matija Popovic
          </m.h1>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="bar bg-custom-third"
          ></m.div>

          <m.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="fixed text-5xl negmarg font-luckiest border-main-fourth text-main-fourth"
          >
            Software developer
          </m.h2>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.65, ease: "easeOut" }}
          exit={{ opacity: 0 }}
        >
          <Image
            className="absolute meImage"
            src="/image_me.JPG"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </m.div>
        <div>
          <Image
            src="/dots1.png"
            alt="Dots"
            width={500}
            height={500}
            className="absolute meDots -z-10"
          ></Image>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="absolute mainglasscard"
        >
          <Glasscard text={content} ></Glasscard>
        </m.div>
        <div></div>
      </main>
    </m.div>
  );
}
