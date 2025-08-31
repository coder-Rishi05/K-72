// import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
// import { NavbarContext } from '../../context/NavContext'

const FullScreen = () => {


  // const staireParentRef = useRef(null);
  const fullNavLinkRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".stairing", {
      height: 0,
      delay: 1,
      stagger: {
        amount: -0.2,
      },
    });
    tl.from(fullNavLinkRef.current, {
      opacity: 0,
    });
    tl.from(".link",{
      rotateX:90,
      stagger:{
        amount:.5
      }
    })
  });

  return (
    <div
      id="fullScreennav"
      className="hidden h-screen w-full absolute  overflow-hidden bg-black text-white "
    >
      <div  className="h-screen w-full fixed ">
        <div className="h-full w-full flex ">
          <div className=" stairing h-full w-1/5 bg-red-700 "></div>
          <div className=" stairing h-full w-1/5 bg-red-700 "></div>
          <div className=" stairing h-full w-1/5 bg-red-700 "></div>
          <div className=" stairing h-full w-1/5 bg-red-700 "></div>
          <div className=" stairing h-full w-1/5 bg-red-700 "></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className=" cross-icon flex w-full justify-between p-5 items-start ">
          <div className="px-3 pt-1">
            <div className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="64"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="h-32 w-32 relative cursor-pointer  ">
            <div className="h-44 w-[1.5px]  absolute -rotate-45 origin-top   bg-[#D3FD50]"></div>
            <div className="h-44 w-[1.5px]  right-0 absolute rotate-45 origin-top  bg-[#D3FD50]"></div>
            {/* <div className=""></div> */}
          </div>
        </div>
        <div className="">
          <div className="link relative origin-top  border-gray-100/50 border-t-1 ">
            <h1 className="uppercase font-[font2] tracking-tight text-[8vw] leading-[0.8] pt-5  text-center ">
              Projets
            </h1>
            <div className="moveLink absolute text-black flex bg-[#D3FD50] top-0 ">
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link relative origin-top  border-gray-100/50 border-t-1 ">
            <h1 className="uppercase font-[font2] tracking-tight text-[8vw] leading-[0.8] pt-5  text-center ">
              Agence
            </h1>
            <div className="moveLink absolute text-black flex bg-[#D3FD50] top-0 ">
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link relative origin-top  border-gray-100/50 border-t-1 ">
            <h1 className="uppercase font-[font2] tracking-tight text-[8vw] leading-[0.8] pt-5  text-center ">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex bg-[#D3FD50] top-0 ">
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link relative origin-top  border-gray-100/50 border-t-1 ">
            <h1 className="uppercase font-[font2] tracking-tight text-[8vw] leading-[0.8] pt-5  text-center ">
              Blogue
            </h1>
            <div className="moveLink absolute text-black flex bg-[#D3FD50] top-0 ">
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center   ">
                <h2 className="  uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img4.jpg"
                  alt=""
                />
                <h2 className=" text-black uppercase whitespace-nowrap font-[font2] tracking-tight   text-[8vw] leading-[0.8] pt-5  text-center">
                  Pour Tout VOIR
                </h2>
                <img
                  className="h-20 object-center mx-8 rounded-full  w-56 object-cover shrink-0"
                  src="public/img_nav/img5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
