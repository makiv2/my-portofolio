import StaticMain from "../components/Mobile/StaticMain";
import AnimatedMain from "../components/Pc/AnimatedMain";


const Home = () => {
    return (
        <>
            <div className={"guard_mobile"}>
                <StaticMain></StaticMain>
            </div>
            <div className={"guard_pc"}>
                <AnimatedMain></AnimatedMain>
            </div>
        </>
    )
}

export default Home;
