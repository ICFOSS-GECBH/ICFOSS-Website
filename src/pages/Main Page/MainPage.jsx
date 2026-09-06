import React, { useRef } from "react";
import MainButton from "./MainButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MainPage = () => {

  {/*Animation */ }
  const tlRef = useRef(gsap.timeline())
  const mainPageAnimation = () => {
    const tl = tlRef.current;


    useGSAP(() => {
      tl.from("h1 span", {
        y: -100,
        opacity: 0,
        delay: .5,
        duration: 1,
        stagger: 0.3

      }, "but")

      tl.from("p", {
        x: -100,
        opacity: 0,
        duration: .3

      }, "<0.6")
    });
  }


  mainPageAnimation()


  return (
    <div>
      <div className=" w-screen absolute top-1/2 left-1/2 text-white  items-center text-center transform -translate-x-1/2 -translate-y-1/2 gap-5">
        <h1
          className="w-full font-extrabold lg:text-6xl lg:my-9 text-2xl my-1.5 ">
          <span>FREE OPEN SOURCE SOFTWARE COMMUNITY</span> <br />
          <span>of GEC BARTON HILL</span>
        </h1>
        <p className="text-[10px] my-2 px-2 lg:text-lg">
          FOSS Cell is a Technical Society That Promotes And Strengthens The
          Free And Open Source Software Ecosystem in GECBH. <br /> Join Us To
          Learn,Build And Share
        </p>
        <div><MainButton tlRef={tlRef} /></div>
      </div>
    </div>
  );
};

export default MainPage;
