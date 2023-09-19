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
                            <p className={"project__card__p"}>I am currently in my final year pursuing an MSc in
                                Communication
                                Technology and Digital Security.</p>
                            <p className={"project__card__footer"}><strong>NTNU</strong></p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__p"}>I am currently in my final year pursuing an MSc in
                                Communication
                                Technology and Digital Security.</p>
                            <p className={"project__card__footer"}><strong>NTNU</strong></p>
                        </div>
                    </li>

                </ul>

                <h2 className={"project__h2"}>Archived || Incomplete</h2>
                <ul className={"project__ul"}>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__p"}>I am currently in my final year pursuing an MSc in
                                Communication
                                Technology and Digital Security.</p>
                            <p className={"project__card__footer"}><strong>NTNU</strong></p>
                        </div>
                    </li>
                    <li>
                        <div className={"project__card"}>
                            <p className={"project__card__p"}>I am currently in my final year pursuing an MSc in
                                Communication
                                Technology and Digital Security.</p>
                            <p className={"project__card__footer"}><strong>NTNU</strong></p>
                        </div>
                    </li>
                </ul>
                <div className={"project__bottom"}></div>
            </main>
        </>
    );
}

export default StaticProjects;
