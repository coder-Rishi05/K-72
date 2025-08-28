import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useRef } from "react";

const Agency = () => {
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
    "public/img/img1.jpeg",
    "public/img/img2.jpeg",
    "public/img/img3.jpeg",
    "public/img/img4.jpeg",
    "public/img/img5.jpeg",
    "public/img/img6.jpeg",
    "public/img/img7.jpeg",
    "public/img/img8.jpeg",
    "public/img/img9.jpeg",
    "public/img/img10.jpeg",
    "public/img/img11.jpeg",
    "public/img/img12.jpeg",
    "public/img/img13.jpeg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 21.9%",
        end: "top -100%",
        scrub: true,
        pin: true,
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
      <div className="section1  ">
        <div
          ref={imageDivRef}
          className="img h-80 -z-10 top-40 left-112  absolute w-60"
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
