import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <>
      <div className="pt-5 text-center font-[font1] text-[12vw] mt-72 lg:mt0 lg:text-[10vw] text-white">
        <div className="  lg:leading-[8vw] leading-[10vw]  flex items-start  justify-center  uppercase  font-bold ">
          The spark for
        </div>
        <div className="  flex items-start  justify-center lg:leading-[8vw] leading-[10vw]  uppercase  font-bold ">
          all
          <div className=" lg:h-[7vw] h-[9vw] lg:w-[13vw] w-[15vw] rounded-full   overflow-hidden ">
            <Video />
          </div>
          things
        </div>
        <div className="  lg:leading-[8vw] leading-[10vw] flex items-start  justify-center   uppercase  font-bold  ">
          creative
        </div>
      </div>
      <div className="flex w-screen items-end justify-end">
        <p className="text-white font-bold text-xs lg:text-sm w-[75vw] lg:w-[20vw]">
          <span className="ml-10">K72 is an agency that builds brands</span>{" "}
          from every angle. Today, tomorrow and years from now. We think the
          best sparks fly when comfort zones get left behind and friction
          infuses our strategies, brands and communications with real feeling.
          We’re transparent, honest and say what we mean, and when we believe in
          something, we’re all in.
        </p>
      </div>
    </>
  );
};

export default HomeHeroText;
