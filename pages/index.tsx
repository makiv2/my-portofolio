import Head from "next/head";
import { Inter } from "@next/font/google";
import { motion as m } from "framer-motion";
import GlassCard from "../components/GlassCard";
import Image from "next/image";

const content = "NTNU, my academic home \n\
Master's degree, my future to hone\n\
Research assistant, the work I do\n\
At HYRE, this summer, an intern to be\n\
With knowledge and skills, I pave my way\n\
To a bright future, come what may.\n\ - ChatGPT";

const backgroundtext = "Summary";

const Home = () => {
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
          <GlassCard text={content} backgroundText={backgroundtext}></GlassCard>
        </m.div>
        <div></div>
      </main>
    </m.div>
  );
}

export default Home;
