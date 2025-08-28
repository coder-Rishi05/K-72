import React from "react";

const Agency = () => {
  return (
    <div>
      <div className="section1" >
      <div className="img h-80 -z-10 top-40 left-112 rounded-4xl overflow-hidden absolute w-60">
        <img className="h-full w-full object-cover " src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="personImg" />
      </div>
      <div className=" relative mt-[55vh]">
        <h1 className="text-[20vw]  uppercase font-[font2] leading-[18vw] font-semibold text-center">
          SEVEN7Y <br />
          TWO
        </h1>
      </div>
      <div className="pl-[50%]  ">
        <p className=" text-5xl font-bold font-[font2] ">
          &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
          inquisitive and open-minded, and we make sure creativity crowds out
          ego from every corner. A brand is a living thing, with values, a
          personality and a story. If we ignore that, we can achieve short-term
          success, but not influence that goes the distance. We bring that
          perspective to every brand story we help tell.
        </p>
      </div>
    </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agency;
