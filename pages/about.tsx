import StaticAbout from "../components/Mobile/StaticAbout";
import AnimatedAbout from "../components/Pc/AnimatedAbout";


function About() {
  return (
      <>
        <div className={"guard_mobile"}>
          <StaticAbout></StaticAbout>
        </div>
        <div className={"guard_pc"}>
          <AnimatedAbout></AnimatedAbout>
        </div>
      </>
  );
}

export default About;
