import Head from "next/head";

function StaticExperience() {
    return (
        <>
            {/* Fixed elements */}
            <div className={"experienceBackground global__background"}></div>
            <div className={"global__cover  experience__cover"}></div>
            <div className={"global__cover__blur experience__cover_blur"}></div>
            {/* End of fixed elements */}
            <Head>
                <meta name="theme-color" content="#0b0c10"/>
            </Head>
            <main>
                <h1>Experience //TODO</h1>
            </main>
        </>
    );
}

export default StaticExperience;
