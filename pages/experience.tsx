import { motion as m } from "framer-motion";

function Experience() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="text-gray-900 absolute top-0 w-full h-85.7p bg-cyan-600 lg:px-32 px-16"
    >
      <main>
        <div className="mt-80 overflow-hidden absolute left-32">
          <h1 className="text-6xl text-center lg:text-left lg:text-8xl px-15 font-rowdies">
            Experience
          </h1>
        </div>
      </main>
    </m.div>
  );
}

export default Experience;
