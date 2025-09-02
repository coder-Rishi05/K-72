import React, { useContext } from "react";
import img1 from "../../public/projets_img/img1.jpg";
import img2 from "../../public/projets_img/img2.jpg";
import img3 from "../../public/projets_img/img3.jpg";
import img4 from "../../public/projets_img/img4.jpg";
import img5 from "../../public/projets_img/img5.jpg";
import img6 from "../../public/projets_img/img6.jpg";
import img7 from "../../public/projets_img/img7.jpg";
import img8 from "../../public/projets_img/img8.jpg";
import ProjectCard from "../components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { NavbarColorContext } from "../context/NavContext";

// import img9 from "../../public/projets_img/img9.jpg";
// import img10 from "../../public/projets_img/img10.jpg";
// import img11 from "../../public/projets_img/img11.jpg";
// import img12 from "../../public/projets_img/img12.jpg";

const Projects = () => {

  // const [navColor, setNavColor] = useContext(NavbarColorContext)

  const ImgArray = [
    {
      imgSrc1: img1,
      imgSrc2: img2,
      tag: "Voir le projet",
    },
    {
      imgSrc1: img3,
      imgSrc2: img4,
      tag: "Voir le projet",
    },
    {
      imgSrc1: img5,
      imgSrc2: img6,
      tag: "Voir le projet",
    },
    {
      imgSrc1: img7,
      imgSrc2: img8,
      tag: "Voir le projet",
    },
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(".hero", {
      height: '100px',
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".parent",
        // markers: true,
        start: "top 100%",
        end:"top -150%",
        scrub:true 
      },
    });
  });

  return (
    <div className="lg:p-4 p-2">
      <div className=" pt-[30vh] lg:pt-[45vh]">
        <h2 className="font-[font2] relative uppercase text-7xl lg:text-[10.5vw] font-bold ">
          Projets
          <sup className="lg:text-4xl text-sm absolute lg:top-14 top-0 font-bold font-[font2] ">
            16
          </sup>
        </h2>
      </div>
      <div className="parent -mt-2 -lg:mt-10">
        {ImgArray.map((item, index) => (
          <div key={index} className="hero w-full  lg:h-[850px] mb-4 flex-col lg:flex-row  flex lg:gap-4 gap-2  ">
            <ProjectCard
              img1={item.imgSrc1}
              tag={item.tag}
              img2={item.imgSrc2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
