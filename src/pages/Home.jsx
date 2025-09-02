import React from "react";
import Video from "../components/Home/Video";
import HomeBottomText from "../components/Home/HomeBottomText";
import HomeHeroText from "../components/Home/HomeHeroText";

const Home = () => {
  return (
    <div className="">
      <div className="h-screen w-screen fixed ">
        <Video />
      </div>
      <div className="  h-screen w-screen  relative flex flex-col justify-between  ">
        <HomeHeroText />
        <HomeBottomText  />
      </div>
    </div>
  );
};

export default Home;
