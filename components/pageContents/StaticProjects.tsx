import { motion as m } from "framer-motion";
import GlassCard from "../../components/GlassCard";
import Head from "next/head";


function StaticProjects() {
    const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit/";

    return (
        <>
            {/* Fixed elements */}
            <div className={"projectBackground global__background"}></div>
            <div className={"global__cover"}></div>
            <div className={"global__cover__blur"}></div>
            {/* End of fixed elements */}
            <Head>
                <meta name="theme-color" content="#0b0c10"/>
            </Head>

            <main className={"project__main"}>
                <div className={"project__top"}></div>
                <h1 className={"project__h1"}>Projects
                    <div className={"project__bar"}></div>
                </h1>

            </main>
        </>
    );
}

export default StaticProjects;
