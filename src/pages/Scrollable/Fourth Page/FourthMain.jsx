import { Calendar, Clock, MapPin } from "lucide-react";
import React, { useRef, useState } from "react";
import FouthHero from "./FourthHero";
import FourthCard from "./FourthCard";
import eventData from "../../../Data/Event.json";
import RecentEventHero from "./Recent Events/RecentEventHero";
import RecentEventsMain from "./Recent Events/RecentEventsMain";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from "motion/react-client";
import prevEventData from "../../../Data/PreviousEvent.json";
gsap.registerPlugin(ScrollTrigger);

const FourthMain = () => {
  const fourthHeroRef = useRef();
  const fourthMain = useRef();
  const fourthRefCard = useRef();
  const fourthRefRecentCard = useRef();
  const fourthRefRecentHero = useRef();
  const fourthRefButton = useRef();
  const [mobiletl, setMobiletl] = useState(null);

  useGSAP(() => {
    var mm = gsap.matchMedia();
    if (!eventData || eventData.length  === 0 || !fourthMain.current) return;

    mm.add("(max-width: 768px)", () => {
      var tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: fourthMain.current,
          scroller: "body",
          pin: true,
          scrub: 2,
          start: "top 0%",
          end: "+=1000",
          anticipatePin: 1,
        },
      });

      tl3.to(fourthRefCard.current.children, {
        xPercent: -300,
      });
      setMobiletl(tl3);
    });
    mm.add("(min-width: 769px)", () => {
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: fourthRefCard.current,
          scroller: "body",
          start: "top 50%",
          end: "bottom 80%",
          scrub: 2,
        },
      });

      tl2.from(fourthHeroRef.current.querySelector("h1"), {
        x: -100,
        opacity: 0,
      });
      tl2.from(fourthMain.current.querySelector("h4"), {
        x: -100,
        opacity: 0,
        stagger: 0.3,
      });
      tl2.from(fourthRefCard.current.children, {
        x: -100,
        opacity: 0,
        stagger: 0.3,
      });
      tl2.from(fourthRefRecentHero.current, {
        x: 100,
        opacity: 0,
        stagger: 0.3,
      });
      tl2.from(fourthRefRecentCard.current.children, {
        x: 100,
        opacity: 0,
        stagger: 0.3,
      });
    });
  });

  return (
    <div className=" ">
      <div ref={fourthMain} className="h-fit ">
        <div ref={fourthHeroRef}>
          <FouthHero />
        </div>
        <div className="lg:flex lg:flex-col flex flex-col overflow-x-scroll lg:overflow-hidden justify-start items-center no-scrollbar">
          <div>
            <h4 className="text-white font-semibold mx-12 my-3">
              Upcoming Events
            </h4>
          </div>
          {eventData && eventData.length > 0 ? (
            <div
              ref={fourthRefCard}
              className="flex flex-row items-center justify-evenly lg:overflow-hidden lg:snap-none lg:px-0 md:overflow-x-auto md:snap-x md:snap-mandatory no-scrollbar w-full px-[15%] lg:w-fit"
            >
              {eventData.map((event, index) => (
                <div key={index} className="md:snap-center md:shrink-0">
                  <FourthCard event={event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center p-10">
              <h3 className="text-white text-xl font-semibold">
                Events Coming Soon
              </h3>
            </div>
          )}
        </div>
      </div>


      {prevEventData && prevEventData.length > 0 ? (
              <div className="min-h-screen">
        <div ref={fourthRefRecentHero}>
          <RecentEventHero />
        </div>

        <div ref={fourthRefRecentCard}>
          <RecentEventsMain timeline={mobiletl} />
        </div>

      </div>
      ):(
        <div></div>
      )}
    </div>
  );
};

export default FourthMain;
