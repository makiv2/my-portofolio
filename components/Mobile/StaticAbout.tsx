import Head from "next/head";

function StaticAbout() {
    return (
        <>
            {/* Fixed elements */}
            <div className={"aboutBackground global__background"}></div>
            <div className={"global__cover  about__cover"}></div>
            <div className={"global__cover__blur about__cover_blur"}></div>
            {/* End of fixed elements */}
            <Head>
                <meta name="theme-color" content="#0b0c10"/>
            </Head>
            <main className={"about__main"}>
                <div className={"about__top"}></div>
                <h1 className={"about__h1"}>About
                    <div className={"about__bar"}></div>
                </h1>
            </main>
        </>
    );
}

export default StaticAbout;
