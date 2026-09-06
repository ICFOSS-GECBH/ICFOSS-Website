import React, { useRef } from "react";
import FifthPageHero from "./FifthPageHero";
import FifthPageCard from "./FifthPageCard";
import project from "../../../Data/Project.json";
import FifthPageButton from "./FifthPageButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FifthPageMain = () => {
  const fifthPageHeroRef = useRef();
  const fifthPageMainRef = useRef();
  const fifthPageCardRef = useRef();
  const autoPlayRef = useRef();
  const timeoutRef = useRef();

  const handleInteraction = () => {
    if (autoPlayRef.current) {
      autoPlayRef.current.pause();
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        autoPlayRef.current.play();
      }, 3000);
    }
  };

  useGSAP(
    () => {
      // Prevent animation if there is no data or ref is missing
      if (!project || project.length === 0 || !fifthPageCardRef.current) return;

      const mm = gsap.matchMedia();
      const totalCards = project.length;
      const scrollDistance = (totalCards - 1) * 100;

      mm.add("(max-width: 768px)", () => {
        autoPlayRef.current = gsap.to(fifthPageCardRef.current.children, {
          xPercent: -scrollDistance,
          duration: totalCards * 3,
          ease: "none",
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
        });
      });

      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: fifthPageHeroRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 2,
          },
        });

        tl.from(fifthPageHeroRef.current.querySelector("h1"), {
          opacity: 0,
          x: 100,
        })
          .from(
            fifthPageHeroRef.current.querySelector("h4"),
            { opacity: 0, x: -100 },
            "<"
          )
          .from(fifthPageCardRef.current.children, {
            opacity: 0,
            y: 100,
            stagger: 0.2,
          });
      });
    },
    { scope: fifthPageMainRef, dependencies: [project] }
  );

  return (
    <div
      ref={fifthPageMainRef}
      onTouchStart={handleInteraction}
      onMouseDown={handleInteraction}
    >
      <div>
        <div ref={fifthPageHeroRef}>
          <FifthPageHero />
        </div>

        {project && project.length > 0 ? (
          <>
            <div
              ref={fifthPageCardRef}
              className="flex flex-row items-center justify-evenly w-full overflow-x-hidden no-scrollbar"
            >
              {project.map((event) => (
                <div
                  key={event.id}
                  className="w-screen lg:w-1/3 shrink-0 flex justify-center px-4"
                >
                  <FifthPageCard project={event} />
                </div>
              ))}
            </div>
            {/* <FifthPageButton /> */}
          </>
        ) : (
          <div className="flex justify-center p-10 h-fit">
            <h3 className="text-white text-xl font-semibold">Projects Coming Soon</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FifthPageMain;