import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
// import App from "../../App";

const Stairs = (props) => {
  
  console.log(props.children);

  const current = useLocation();

  console.log(current.pathname);

  const player = useRef(null);
  const layer = useRef(null);
  const paegeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(player.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      // duration: 2,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(player.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(paegeRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [current.pathname]); // now the animation will play when the page path is changed.
  return (
    <div className="">
      <div ref={player} className="h-screen w-full fixed z-20 flex  top-0">
        <div className="h-full w-full flex ">
          <div ref={layer} className=" stair h-full w-1/5 bg-black "></div>
          <div ref={layer} className=" stair h-full w-1/5 bg-black "></div>
          <div ref={layer} className=" stair h-full w-1/5 bg-black "></div>
          <div ref={layer} className=" stair h-full w-1/5 bg-black "></div>
          <div ref={layer} className=" stair h-full w-1/5 bg-black "></div>
        </div>
      </div>
      <div ref={paegeRef} className="">
        {props.children}
      </div>
    </div>
  );
};

export default Stairs;
