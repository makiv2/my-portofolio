import Head from "next/head";
import {motion as m} from "framer-motion";
import GlassCard from "../components/GlassCard";
import Image from "next/image";
import {useEffect, useState} from "react";


const AnimatedMain = () => {

    const [content, setContent] = useState("")

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1024) {
                setContent("I am currently in my fifth year of my master's program at the Norwegian University of Science and Technology, where I am pursuing a degree in Communication Technology and Digital Security. Within this program, I have chosen to specialize in information security, as I believe it is a critical skill set in today's digital landscape.")
            } else {
                setContent("I am currently in my fifth year of the master's program Communication Technology and Digital Security at the Norwegian University of Science and Technology.")
            }
        }
    }, []);


    const backgroundText = "Summary";


    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.65, ease: "easeOut"}}
            exit={{opacity: 1}}
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
                        <m.h1
                            animate={{y: 0}}
                            initial={{y: "100%"}}
                            transition={{delay: 0.25, duration: 1, type: "spring"}}
                            className="index__h1"
                        >
                            Matija Popovic
                        </m.h1>
                        <m.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.2, ease: "easeOut"}}
                            exit={{opacity: 0}}
                            className="index__bar bg-custom-third"
                        ></m.div>
                    </div>
                    <m.h2
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6, duration: 0.3, ease: "easeOut"}}
                        exit={{opacity: 0}}
                        className="index__h2 border-main-fourth text-main-fourth"
                    >
                        Software developer
                    </m.h2>
                </div>

                <m.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.3, duration: 0.65, ease: "easeOut"}}
                    exit={{opacity: 0}}
                >
                    <Image
                        className="index__image"
                        src="/image_me.JPG"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </m.div>
                <div>
                    <Image
                        src="/dots1.png"
                        alt="Dots"
                        width={500}
                        height={500}
                        className="index__dots"
                    ></Image>
                </div>
                <m.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.4, duration: 0.6, ease: "easeOut"}}
                    exit={{opacity: 0}}
                    className="absolute index__glassCard"
                >
                    {/*<GlassCard text={content} backgroundText={backgroundText}></GlassCard>*/}
                </m.div>
                <div></div>
            </main>
        </m.div>
    );
}

export default AnimatedMain;
