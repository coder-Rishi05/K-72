import React from "react";

const FullScreen = () => {
  return (
    <div id="fullScreennav" className="h-screen w-full absolute py-40 bg-black text-white ">

      <div id="all links" className="">
        <div className="relative   border-gray-100/50 border-t-1 ">
          <h1 className="uppercase font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center ">
            Projets
          </h1>
          <div className="absolute text-black flex bg-[#D3FD50] top-0 ">
            <div className="flex items-center overflow-x-auto ">
              <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                Pour Tout VOIR
              </h2>
              <img
                className="h-36 rounded-full w-96 object-cover shrink-0"
                src="public/img_nav/img4.jpg"
                alt=""
              />
              <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                Pour Tout VOIR
              </h2>
              <img
                className="h-36 rounded-full w-96 object-cover shrink-0"
                src="public/img_nav/img5.jpg"
                alt=""
              />
            </div>
            {/* <div className="">
              <h2 className=" text-black uppercase">Pour Tout VOIR</h2>
              <img src="public/img_nav/img4.jpg" alt="" />
              <h2 className=" text-black uppercase">Pour Tout VOIR</h2>
              <img src="public/img_nav/img5.jpg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
