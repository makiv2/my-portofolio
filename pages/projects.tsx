import StaticProjects from "../components/Mobile/StaticProjects";
import AnimatedProjects from "../components/Pc/AnimatedProjects";


function Projects() {
    const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit/";

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
