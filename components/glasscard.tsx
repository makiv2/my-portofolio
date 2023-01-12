import Tilt from "react-parallax-tilt";

function glasscard({text}: {text: string}) {
  return (
    <Tilt
      reset={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#e0e0e0"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div className="card font-lobster">
        <div className="content">
          <h2 className="h2content">:D</h2>
          <p className="pcontent">
            {text}
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default glasscard;
