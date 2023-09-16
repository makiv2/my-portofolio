import StaticProjects from "../components/Mobile/StaticProjects";
import AnimatedProjects from "../components/Pc/AnimatedProjects";


function Projects() {
    return (
        <>
            <div className={"guard_mobile"}>
                <StaticProjects></StaticProjects>
            </div>
            <div className={"guard_pc"}>
                <AnimatedProjects></AnimatedProjects>
            </div>
        </>
    );
}

export default Projects;
