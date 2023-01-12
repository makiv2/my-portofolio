import Tilt from "react-parallax-tilt";

function glasscard() {
  return (
    <Tilt
      reset={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div className="card font-lobster">
        <div className="content">
          <h2 className="h2content">:D</h2>
          <p className="pcontent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
            dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default glasscard;
