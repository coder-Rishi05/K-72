import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Agency = () => {
  // useLocation

  // const locate = useLocation();

  //   console.log(locate.pathname);

  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  // useGSAP(() => {
  //   gsap.to(imageDivRef.current,{
  //     scrollTrigger:{
  //       trigger: imageDivRef,
  //       markers: true,
  //       start: "top 36%",
  //       end: "top -100%",
  //       pin: true,
  //       scrub: true,
  //     },
  //   });
  // });

  const imgArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "/img/img1.jpeg",
    "/img/img2.jpeg",
    "/img/img3.jpeg",
    "/img/img4.jpeg",
    "/img/img5.jpeg",
    "/img/img6.jpeg",
    "/img/img7.jpeg",
    "/img/img8.jpeg",
    "/img/img9.jpeg",
    "/img/img10.jpeg",
    "/img/img11.jpeg",
    "/img/img12.jpeg",
    "/img/img13.jpeg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 21.9%",
        end: "top -100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          let imgIndex;
          if (e.progress < 1) {
            imgIndex = Math.round(e.progress * imgArray.length);
          } else {
            imgIndex = imgArray.length - 1;
          }

          imageRef.current.src = imgArray[imgIndex];
          // console.log(imageRef.current.src);
        },
      },
    });
  });

  return (
    <div>
      <div className="section1 relative py-1 ">
        <div
          ref={imageDivRef}
          className="img h-80 -z-10 top-40 left-112   absolute w-60"
        >
          <img
            ref={imageRef}
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
