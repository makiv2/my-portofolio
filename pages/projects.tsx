import { motion as m } from "framer-motion";
import GlassCard from "../components/GlassCard";

function Projects() {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit/";

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-main-fourth absolute top-0 w-full h-85.7p projectBackground backgroundStyle lg:px-32 px-16"
    >
      <main>
        <div className="mt-60 overflow-hidden absolute right-40">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.25, duration: 1, type: "spring" }}
            className="text-6xl text-center lg:text-left lg:text-8xl py-4 font-rowdies"
          >
            Projects
          </m.h1>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="barUnderName bg-project-camroon"
          ></m.div>
        </div>

        <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="absolute left-10 w-3/5 toptenth bottom-10 justify-evenly items-center grid"
        >
          <div className="relative boxSize">
            <GlassCard text={content} backgroundText={'1'}></GlassCard>
          </div>
          <div className="relative boxSize">
            <GlassCard text={content} backgroundText={'2'}></GlassCard>
          </div>
          <div className="relative boxSize">
            <GlassCard text={content} backgroundText={'3'}></GlassCard>
          </div>
          <div className="relative boxSize">
            <GlassCard text={content} backgroundText={'4'}></GlassCard>
          </div>
        </m.section>
      </main>
    </m.div>
  );
}

export default Projects;
