import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="pt-5 text-center font-[font1] text-[10vw] text-white">
      <div className="  leading-[8vw]  flex items-start  justify-center  uppercase  font-bold ">
        The spark for
      </div>
      <div className="  flex items-start  justify-center leading-[8vw]  uppercase  font-bold ">
        all
        <div className=" h-[7vw] w-[13vw] rounded-full   overflow-hidden ">
          <Video />
        </div>
        things
      </div>
      <div className="  leading-[8vw] flex items-start  justify-center   uppercase  font-bold  ">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
