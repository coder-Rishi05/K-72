import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);

  useGSAP(() => {
    // gsap.to(imageDivRef.current, {
    //   scrollTrigger: {
    //     trigger: imageDivRef,
    //     markers: true,
    //   },
    // });
  });

  return (
    <div>
      <div className="section1">
        <div className="img h-80 -z-10 top-40 left-112  absolute w-60">
          <img
            ref={imageDivRef}
            className="h-full w-full rounded-4xl  object-cover "
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="personImg"
          />
        </div>
        <div className=" relative mt-[55vh]">
          <h1 className="text-[20vw]  uppercase font-[font2] leading-[18vw] font-semibold text-center">
            SEVEN7Y <br />
            TWO
          </h1>

          <div className="pl-[50%]  ">
            <p className=" text-5xl font-bold font-[font2] ">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agency;
