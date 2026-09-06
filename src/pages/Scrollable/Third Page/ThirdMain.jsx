import React, { useRef } from "react";
import ThirdHero from "./ThirdHero";
import OpenDevelopment from "./Third Page Components/OpenDevelopment";
import Community from "./Third Page Components/Community";
import Collaboration from "./Third Page Components/Collaboration";
import PassionForFoss from "./Third Page Components/PassionForFoss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ThirdMain = () => {
  
  const thirdMainRef = useRef();
  const thirdMainRefHero = useRef();
  const thirdMainRefHero2=useRef();
  const thirdMainRefComponent=useRef();


  const thirdMainAnimation = ()=>{
    useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: thirdMainRef.current,
        scroller: "body",
        start: "top 30%",
        end: "bottom 70%",
        scrub: 2,
      }

    });
    tl2.from(thirdMainRefHero.current.querySelector("h1"), {
      opacity: 0,
      x: -100,
      
    },"thirdHero1");
    tl2.from(thirdMainRefHero.current.querySelector("p"), {
      opacity: 0,
      x: 100,
      
    },"thirdHero1");
    tl2.from(thirdMainRefHero2.current, {
      opacity: 0,
      x:-100,
      
    },"thirdHero2");
    tl2.from(thirdMainRefComponent.current.children, {
      opacity: 0,
      y:100,
      stagger:.3
      
    },"thirdHero2");

  });
  }

  thirdMainAnimation()

  return (
    <div>
      <div
      ref={thirdMainRef}>
        {/* Hero */}
        <div
          
          className="flex flex-col items-center justify-center h-fit"
        >

          <div 
          ref={thirdMainRefHero}
          className="">
            <ThirdHero />
          </div>

          <h1 
          ref={thirdMainRefHero2}
          className="text-white font-bold lg:text-5xl lg:my-15 text-5xl my-10">
            Our Values
          </h1>

          <div 
          ref={thirdMainRefComponent}
          className="lg:flex lg:flex-row lg:gap-9 grid grid-cols-2 grid-rows-2 p-5 gap-4">

            {/* Components */}
            <OpenDevelopment />
            <Community />
            <Collaboration />
            <PassionForFoss />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMain;
