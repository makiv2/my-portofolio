import Tilt from "react-parallax-tilt";


function glasscard() {
  return (
    <Tilt reset={false} tiltMaxAngleX={10} tiltMaxAngleY={5}>
      <div className="card">
        <div className="content">
          <h2 className="h2content">01</h2>
          <h3 className="h3content">Card One</h3>
          <p className="pcontent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quod. use parallax tilt for the text on top test
            https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect-img
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default glasscard;
