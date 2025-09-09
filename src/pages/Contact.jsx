import React from "react";

const Contact = () => {
  return (
    <div className="bg-black w-full h-screen">
      <div className="lg:pt-4 pt-30 ">
        <h1 className="text-[14vw] leading-[12vw] tracking-tighter lg:text-[10vw] lg:leading-[8.5vw]  font-[font1]  text-white text-center uppercase ">
          Pour{" "}
        </h1>
        <h1 className=" text-[14vw] leading-[12vw] tracking-tighter lg:text-[10vw] lg:leading-[8.5vw]  font-[font1]  text-white text-center uppercase ">
          parler de
        </h1>
        <h1 className=" text-[14vw] leading-[12vw] tracking-tighter lg:text-[10vw] lg:leading-[8.5vw]  font-[font1]  text-white text-center uppercase ">
          votre
        </h1>
        <h1 className=" text-[14vw] leading-[12vw] tracking-tighter lg:text-[10vw] lg:leading-[8.5vw]  font-[font1]  text-white text-center uppercase ">
          projet
        </h1>
      </div>
      <div className="child-text text-white w-full lg:relative gap-8 lg:-top-[10%] flex my-10 items-center font-[font2]  lg:justify-between justify-center lg:flex-row flex-col  ">
        <div className="left text-sm w-1/2 lg:w-1/3  lg:absolute   text-center ">
          <p> Dans un écran ou un bureau.</p> <p>Chez vous. Chez nous. </p>
          Partout.
        </div>
        <div className="right font-[font2]  lg:absolute -right-40 text-sm w-1/2 text-center hover:cursor-pointer hover:underline">
          <p>525 Av. Viger O - Suite 400</p> Montréal, QC H2Z 1G6 →
        </div>
      </div>
      <div className="btm text-center text-sm font-bold text-white font-[font2] uppercase ">Suivez-nous</div>
    </div>
  );
};

export default Contact;

// color : bg-[#FFFFFF]
