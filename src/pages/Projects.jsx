import React from "react";

const Projects = () => {
  return (
    <div className="p-4">
      <div className="bg-pink-400 pt-[45vh]">
        <h2 className="font-[font2] relative uppercase text-[10.5vw] font-bold ">
          Projets{" "}
          <sup className="text-4xl absolute top-14 font-bold font-[font2] ">
            16
          </sup>
        </h2>
      </div>
      <div className="">
        <div className="w-full  h-[700px] mb-4 flex gap-4 -mt-10 ">
          <div className="w-1/2 hover:rounded-4xl relative overflow-hidden h-full ">
            <img
              className="w-full h-full object-cover object-center "
              src="public/projets_img/img1.jpg"
              alt=""
            />
            <h2 className="uppercase font-[font2] text-4xl  absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
              Voir le projet
            </h2>
          </div>
          <div className="w-1/2 hover:rounded-4xl relative overflow-hidden h-full ">
            <img
              className="w-full h-full object-cover object-center "
              src="/public/projets_img/img2.jpg"
              alt=""
            />
            <h2 className="uppercase font-[font2] text-4xl absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
              Voir le projet
            </h2>
          </div>
        </div>
        {/* <div className="w-full h-[300vh] mb-4 flex gap-4  bg-green-400">
          <div className="w-1/2 h-full bg-violet-400">
            <img
              className="w-full h-full object-cover object-center relative"
              src="/public/projets_img/img3.jpg"
              alt=""
            />
            <h2 className="uppercase font-[font2] text-4xl absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
              Voir le projet
            </h2>
          </div>
          <div className="w-1/2 h-full bg-[aqua]">
            <img
              className="w-full h-full object-cover object-center relative"
              src="/public/projets_img/img4.jpg"
              alt=""
            />
            <h2 className="uppercase font-[font2] text-4xl absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
              Voir le projet
            </h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
