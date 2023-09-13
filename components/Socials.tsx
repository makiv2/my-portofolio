import Image from "next/image";

const github = require("../public/github.svg") as string;
const mail = require("../public/mail.svg") as string;
const twitter = require("../public/twitter.svg") as string;
const linkedin = require("../public/linkedin.svg") as string;

const Socials = () => {
    return (
        <div className="socials textfootercolor">
            {/* CHANGE FONT? */}
            <a className="socials__tags" target="_blank" href="mailto:matijap@stud.ntnu.no" rel="noreferrer">
                <Image src={mail} alt="Mail: " width={25} height={25}/>
                &nbsp;matijap@stud.ntnu.no
            </a>
            <a className="socials__tags" target="_blank" href="https://www.github.com/makiv2" rel="noreferrer">
                <div className={"socials__icon"}>
                    <Image src={github} alt="Github: " width={25} height={25}/>
                </div>
                <div className={"socials__text"}>
                    &nbsp;github.com/makiv2
                </div>
            </a>
            <a className="socials__tags" target="_blank" href="https://www.twitter.com" rel="noreferrer">
                <Image src={twitter} alt="Twitter: " width={25} height={25}/>
                &nbsp;twitter.com/????
            </a>
            <a className="socials__tags" target="_blank" href="www.linkedin.com/in/matija-popovic00" rel="noreferrer">
                <Image src={linkedin} alt="Linkedin: " width={25} height={25}/>
                &nbsp;/in/matija-popovic
            </a>
        </div>
    );
}

export default Socials;
