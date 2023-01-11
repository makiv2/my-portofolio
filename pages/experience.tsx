import { motion as m } from "framer-motion";

function Experience() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="text-project-first absolute top-0 w-full h-85.7p experiencebackground spacer g:px-32 px-16"
    >
      <main>
        <div className="mt-80 absolute left-32">
          <h1 className="text-6xl text-center lg:text-left lg:text-8xl px-15 font-rowdies">
            Experience
          </h1>
          <div className="bg-slate-500 expbar"></div>
        </div>
      </main>
    </m.div>
  );
}

export default Experience;
