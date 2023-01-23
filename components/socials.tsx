import Image from "next/image";
import github from "../public/github.svg";
import mail from "../public/mail.svg";
import linkedin from "../public/linkedin.svg";
import twitter from "../public/twitter.svg";

function Socials() {
  return (
    <div className="font-specialelite textfootercolor font-bold w-full flex justify-evenly">
      {/* CHANGE FONT? */}
      
      <div className="flex items-center">
        <a className="flex x-10" target="_blank" href="mailto:matijap@stud.ntnu.no" rel="noreferrer">
          <Image src={mail} alt="Mail: " width={25} height={25} />
          &nbsp;matijap@stud.ntnu.no
        </a>
      </div>

      <div className="flex items-center">
        <a className="flex px-10" target="_blank" href="https://www.github.com/makiv2" rel="noreferrer">
          <Image src={github} alt="Github: " width={25} height={25} />
          &nbsp;github.com/makiv2
        </a>
      </div>

      <div className="flex items-center">
        <a className="flex px-10" target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <Image src={twitter} alt="Twitter: " width={25} height={25} />
          &nbsp;twitter.com/????
        </a>
      </div>

      <div className="flex items-center">
        <a className="flex px-10" target="_blank" href="www.linkedin.com/in/matija-popovic00" rel="noreferrer">
          <Image src={linkedin} alt="Linkedin: " width={25} height={25} />
          &nbsp;/in/matija-popovic
        </a>
      </div>
    </div>
  );
}

export default Socials;
