import { motion as m } from "framer-motion";
import GlassCard from "../../components/GlassCard";
import Head from "next/head";


function StaticProjects() {
    const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit/";

    return (
        <div
            className="text-main-fourth absolute top-0 w-full h-85.7p projectBackground backgroundStyle lg:px-32 px-16"
        >
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

                <section
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
                </section>
            </main>
        </div>
    );
}

export default StaticProjects;
