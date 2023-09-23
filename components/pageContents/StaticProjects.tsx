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

                <h2 className={"project__h2"}>Active & Under Development</h2>

                <ul className={"project__ul"}>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>PRVault</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>Portofolio Website</strong></p>
                            <p className={"project__card__p"}>My personal portfolio website where you can check on my
                                recent projects, contact me, and get to know me a little better.</p>
                        </div>

                    </li>

                </ul>

                <h2 className={"project__h2"}>Archived || Incomplete</h2>
                <ul className={"project__ul"}>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>HYRE Widget Extension</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>TTM4133 Network Simulator</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>Shoe Bot</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>NEAT AI for chess</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>

                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>TTM4195 Smart Contract</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>Ice Breaker Chat App</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>Arbitrage Betting</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__header"}><strong>MineSweeper</strong></p>
                            <p className={"project__card__p"}>Under development gym application made to elevate workout
                                experience and unite a community of fitness enthusiasts.</p>
                        </div>
                    </li>
                </ul>
                <div className={"project__bottom"}></div>
            </main>
        </>
    );
}

export default StaticProjects;
