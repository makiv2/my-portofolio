import { motion as m } from "framer-motion";
import GlassCard from "../../components/GlassCard";
import Head from "next/head";


function StaticProjects() {
    const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit/";

    return (
        <>
            {/* Fixed elements */}
            <div className={"projectBackground project__background"}></div>
            <div className={"index__cover"}></div>
            <div className={"index__cover__blur"}></div>
            {/* End of fixed elements */}
            <Head>
                <meta name="theme-color" content="#0b0c10"/>
            </Head>
            <main>
                <div className="mt-60 overflow-hidden absolute right-40">
                    <h1
                        className="text-6xl text-center lg:text-left lg:text-8xl py-4 font-rowdies"
                    >
                        Projects
                    </h1>
                    <div
                        className="barUnderName bg-project-camroon"
                    ></div>
                </div>
            </main>
        </>
    );
}

export default StaticProjects;
