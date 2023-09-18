import Head from "next/head";
import Image from "next/image";
import {useState} from "react";


const StaticMain = () => {
    const [content] = useState("I am currently in my fifth year of the master's program Communication Technology and Digital Security at the Norwegian University of Science and Technology.")
    const [backgroundText] = useState("Summary");


    return (
        <>
            {/* Fixed elements */}
            <div className={"mainBackground global__background"}></div>
            <div className={"global__cover"}></div>
            <div className={"global__cover__blur"}></div>
            {/* End of fixed elements */}

            <Head>
                <title>Matija Popovic Portofolio</title>
                <meta name="description" content="Made my wwww.github.com/makiv2"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="theme-color" content="#0b0c10"/>
            </Head>

            <main className={"index__main"}>

                <div className={"index__top"}></div>

                <h1 className={"index__h1"}>Matija Popovic
                    <div className={"index__bar bg-custom-third"}></div>
                </h1>
                <h2 className={"index__h2 border-main-fourth text-main-fourth"}>Software developer</h2>

                <div className={"index__image__container"}>
                    <Image
                        className="index__image"
                        src="/image_me.JPG"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <Image
                        src="/dots1.png"
                        alt="Dots"
                        width={500}
                        height={500}
                        className="index__dots"
                    />
                </div>

                <div className={"index__card"}>
                    <p className={"index__card__p"}>I am currently in my final year pursuing an MSc in Communication Technology and Digital Security.</p>
                    <p className={"index__card__footer"}><strong>NTNU</strong></p>
                </div>

                <div className={"index__bottom"}></div>


            </main>
        </>
    );
}

export default StaticMain;
