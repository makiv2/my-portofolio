import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


// Track mouse movement in component

const mrefreshinterval = 500; // update display every 500ms

function BlurDiv(props: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const blurRef = useRef<HTMLDivElement>(null);
  const [moving, setmoving] = useState(false);

  const [moveCounter, setmoveCounter] = useState(0);







  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {

      setMousePosition({ x: event.clientX, y: event.clientY });

      setmoving(true);
      setmoveCounter(moveCounter + 1);
      console.log(moveCounter)

      //change ccs logic based on if stuff is moving or not

      if (blurRef.current) {
        blurRef.current.style.setProperty(
          "--x",
          (event.clientX - blurRef.current.offsetLeft).toString()
        );

        blurRef.current.style.setProperty(
          "--y",
          (event.clientY - blurRef.current.offsetTop).toString()
        );
      }
    };

    
    window.addEventListener("mousemove", handleMouseMove);

  }, []);




  useEffect(() => {

      //change ccs logic based on if stuff is moving or not
    if (moving) {
      setTimeout(() => {
        setmoving(false);
        setmoveCounter(0);


  

      }, mrefreshinterval);
    }


  }, [moving]);

  

  return (
    <div ref={blurRef} className="h-screen shiny shiny:after">
      {props.children}

      <b>
        ({mousePosition.x}, {mousePosition.y})
      </b>
    </div>
  );
}

export default BlurDiv;
