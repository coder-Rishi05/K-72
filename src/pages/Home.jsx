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
      <div className=" flex flex-col h-screen w-screen justify-between relative ">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
