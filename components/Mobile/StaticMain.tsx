import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from "react";


const StaticMain = () => {
    const [content] = useState("I am currently in my fifth year of the master's program Communication Technology and Digital Security at the Norwegian University of Science and Technology.")
    const [backgroundText] = useState("Summary");


    return (
        <div
            className="index mainBackground"
        >
            <Head>
                <title>Matija Popovic Portofolio</title>
                <meta name="description" content="Made my wwww.github.com/makiv2"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="theme-color" content="#0b0c10"/>
            </Head>

            <main className={"overflow-hidden"}>
                <div className={"index__cover"}></div>
                <div className={"index__cover__blur"}></div>
                <div className={"index_title__name"}>
                    <div className="index__div">
                        <h1
                            className="index__h1"
                        >
                            Matija Popovic
                        </h1>
                        <div
                            className="index__bar bg-custom-third"
                        ></div>
                    </div>
                    <h2
                        className="index__h2 border-main-fourth text-main-fourth"
                    >
                        Software developer
                    </h2>
                </div>

                <div
                >
                    <Image
                        className="index__image"
                        src="/image_me.JPG"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <Image
                        src="/dots1.png"
                        alt="Dots"
                        width={500}
                        height={500}
                        className="index__dots"
                    ></Image>
                </div>
                <div
                    className="absolute index__glassCard"
                >
                    {/*<GlassCard text={content} backgroundText={backgroundText}></GlassCard>*/}
                </div>
                <div></div>
            </main>
        </div>
    );
}

export default StaticMain;
