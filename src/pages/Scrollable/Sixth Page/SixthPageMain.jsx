import React, { useRef, useState } from "react";
import SixthPageHero from "./SixthPageHero";
import CardCarousel from "./CardCarousal";
import newExecomData from "../../../Data/CradCarousal.json";
import oldExecomData from "../../../Data/OldExecom.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SixthPageMain = () => {
  var sixthPageMainRef = useRef();
  var sixthPageHeroRef = useRef();
  var sixthPageCardRef = useRef();
  const [showPrevious, setShowPrevious] = useState(false);

  useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: sixthPageCardRef.current,
        start: "top 80%",
        end: "top 30%",
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
    <div className="gap-4 pb-10">
      <div ref={sixthPageHeroRef}>
        <SixthPageHero />
      </div>
      <div ref={sixthPageCardRef} className="flex flex-col gap-10">
        <div>
          <CardCarousel
            data={newExecomData}
            autoPlayInterval={3000} // Auto-slide every 3 seconds
            autoPlay={true} // Enable auto-play
          />
        </div>

        {showPrevious && (
          <div>
            <h2 className="text-white text-3xl font-bold text-center mt-10 mb-5">
              Previous Execom
            </h2>
            <CardCarousel
              data={oldExecomData}
              autoPlayInterval={3000} // Auto-slide every 3 seconds
              autoPlay={true} // Enable auto-play
            />
          </div>
        )}
      </div>

      <div className="w-full flex justify-center mt-10">
        <button 
          onClick={() => setShowPrevious(!showPrevious)}
          className="border-[#1351DC] rounded-lg border-2 w-fit active:scale-95 text-white text-[15px] font-semibold py-2 px-10 hover:bg-[#1351DC] transition-colors duration-300">
          {showPrevious ? "Hide Previous Execom" : "View Previous Execom"}
        </button>
      </div>
    </div>
  );
};

export default SixthPageMain;
