import Tilt from "react-parallax-tilt";


function glasscard() {
  return (
    <Tilt reset={true} tiltMaxAngleX={10} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.5} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
      <div className="card">
        <div className="content">
          <h2 className="h2content">01</h2>
          <h3 className="h3content">Card One</h3>
          <p className="pcontent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quod. use parallax tilt for the text on top test 
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quod. use parallax tilt for the text on top test
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default glasscard;
