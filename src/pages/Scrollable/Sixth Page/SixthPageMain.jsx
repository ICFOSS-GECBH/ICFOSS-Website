import React, { useRef } from "react";
import SixthPageHero from "./SixthPageHero";
import CardCarousel from "./CardCarousal";
import sampleData from "../../../Data/CradCarousal.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SixthPageMain = () => {
  var sixthPageMainRef = useRef();
  var sixthPageHeroRef = useRef();
  var sixthPageCardRef = useRef();

  useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: sixthPageCardRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
      }
    });
    tl2.from(sixthPageHeroRef.current, {
      opacity: 0,
      x: 100,
    });
    tl2.from(sixthPageCardRef.current, {
      opacity: 0,
      y: 100,
    });
  });

  return (
    <div className="gap-4">
      <div ref={sixthPageHeroRef}>
        <SixthPageHero />
      </div>
      <div ref={sixthPageCardRef}>
        <CardCarousel
          data={sampleData}
          autoPlayInterval={3000} // Auto-slide every 3 seconds
          autoPlay={true} // Enable auto-play
        />
      </div>

      <div className="w-full flex justify-center">
        {/* <button className="border-[#1351DC] rounded-lg border-2 w-fit active:scale-95 text-white text-[10px] py-2 px-10">
          View All
        </button> */}
      </div>
    </div>
  );
};

export default SixthPageMain;
