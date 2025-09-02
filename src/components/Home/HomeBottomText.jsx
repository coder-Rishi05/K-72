import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex text-[6.5vw]   items-end justify-center gap-8 text-white  font-[font2]">
      <Link
        className=" border-3   hover:text-[#D3FD50] hover:border-[#D3FD50] pt-1 leading-[6.5vw]  lg:leading-[5vw] lg:pt-4 lg:px-6 px-2 border-white rounded-full  uppercase  "
        to="/projects"
      >
        Projets
      </Link>
      <Link
        className=" border-3  hover:text-[#D3FD50] hover:border-[#D3FD50] pt-1 leading-[6.5vw]  lg:leading-[5vw] lg:pt-4 lg:px-6 px-2 border-white rounded-full  uppercase  "
        to="/agency"
      >
        Agency
      </Link>
    </div>
  );
};

export default HomeBottomText;
