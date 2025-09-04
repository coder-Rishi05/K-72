import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="lg:w-1/2  group  transition-all duration-200 cursor-pointer hover:rounded-[50px] relative overflow-hidden h-full ">
        <img
        
          className="w-full h-full   object-cover object-center "
          src={props.img1}
          alt=""
        />
        <div className=" opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
          <h2 className=" border-2 border-white rounded-full  uppercase font-[font1] font-bold text-white lg:leading-[3vw]    text-center  lg:pt-4 px-2 pt-1 lg:px-8 text-xl lg:text-6xl ">
            {props.tag}
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2  group  transition-all duration-200 cursor-pointer hover:rounded-[50px] relative overflow-hidden h-full ">
        <img
          className="w-full h-full  object-cover object-center "
          src={props.img2}
          alt=""
        />
        <div className=" opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
          <h2 className=" border-2 border-white rounded-full  uppercase font-[font1] font-bold text-white lg:leading-[3vw]    text-center  lg:pt-4 px-2 pt-1 lg:px-8 text-xl lg:text-6xl ">
            {props.tag}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
