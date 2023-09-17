import StaticExperience from "../components/Mobile/StaticExperience";
import AnimatedExperience from "../components/Pc/AnimatedExperience";


function About() {
  return (
      <>
        <div className={"guard_mobile"}>
          <StaticExperience></StaticExperience>
        </div>
        <div className={"guard_pc"}>
          <AnimatedExperience></AnimatedExperience>
        </div>
      </>
  );
}

export default About;
