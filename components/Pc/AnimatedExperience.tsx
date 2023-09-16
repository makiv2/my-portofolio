import { motion as m } from "framer-motion";

function AnimatedExperience() {
    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="text-main-fourth absolute top-0 w-full h-85.7p experienceBackground backgroundStyle lg:px-32 px-16"
        >
            <main>
                <div className="mt-80 absolute left-32">
                    <h1 className="text-6xl text-center lg:text-left lg:text-8xl px-15 font-rowdies">
                        Experience //TODO
                    </h1>
                </div>

            </main>
        </m.div>
    );
}

export default AnimatedExperience;
