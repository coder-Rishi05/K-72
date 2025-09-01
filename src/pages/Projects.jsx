import React from "react";
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";
import img6 from "/img6.jpg";
import img7 from "/img7.jpg";
import img8 from "/img8.jpg";
import img9 from "/img9.jpg";
import img10 from "/img10.jpg";
import img11 from "/img11.pg";
import img12 from "/img12.jpg";
import ProjectCard from "../components/Projects/ProjectCard";

const Projects = () => {
  const ImgArray = [
    {
      imgSrc: img1,
      tag: "Voir le projet",
    },
    {
      imgSrc: img2,
      tag: "Voir le projet",
    },
    {
      imgSrc: img3,
      tag: "Voir le projet",
    },
    {
      imgSrc: img4,
      tag: "Voir le projet",
    },
    {
      imgSrc: img5,
      tag: "Voir le projet",
    },
    {
      imgSrc: img6,
      tag: "Voir le projet",
    },
    {
      imgSrc: img7,
      tag: "Voir le projet",
    },
    {
      imgSrc: img8,
      tag: "Voir le projet",
    },
    {
      imgSrc: img9,
      tag: "Voir le projet",
    },
    {
      imgSrc: img10,
      tag: "Voir le projet",
    },
    {
      imgSrc: img11,
      tag: "Voir le projet",
    },
    {
      imgSrc: img12,
      tag: "Voir le projet",
    },
  ];

  return (
    <div className="p-4">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] relative uppercase text-[10.5vw] font-bold ">
          Projets
          <sup className="text-4xl absolute top-14 font-bold font-[font2] ">
            16
          </sup>
        </h2>
      </div>
      <div className=" -mt-10">
        {ImgArray.map((item, index) => (
          <ProjectCard img={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
