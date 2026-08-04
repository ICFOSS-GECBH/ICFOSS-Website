import { X } from "lucide-react";
import React, { useRef } from "react";
import SecondButton from "./SecondButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SecondHero = () => {
  const secondHeroRef = useRef()
  useGSAP(() => {
    gsap.from("h1,p", {
      y: -10,
      opacity: 0,
      duration: 1,
      ease: "power2.in"
    })
  }, { scope: secondHeroRef })
  return (
    <div ref={secondHeroRef} >
      <h1 className="w-full font-extrabold lg:text-6xl lg:my-9 text-2xl ">
        FREE OPEN SOURCE SOFTWARE COMMUNITY <br />
        of GEC BARTON HILL
      </h1>
      <p className="text-[10px] my-2 px-2 lg:text-lg">
        FOSS Cell is a Technical Society That Promotes And Strengthens The
        Free And Open Source Software Ecosystem in GECBH. <br /> Join Us To
        Learn,Build And Share
      </p>
    </div>
  );
};

export default SecondHero;
