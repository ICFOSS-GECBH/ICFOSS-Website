import React, { useRef } from "react";
import RecentEventHero from "./RecentEventHero";
import RecentEventsCard from "./RecentEventsCard";
import prevEventData from "../../../../Data/PreviousEvent.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RecentEventsMain = () => {
  const recentEventCard = useRef();

  useGSAP(() => {
    var mm = gsap.matchMedia();

    const totalCards = prevEventData.length;
    const scrollDistance = (totalCards - 1) * 100;

    mm.add("(max-width:768px)", () => {
      gsap.to(recentEventCard.current.children, {
        xPercent: -scrollDistance,
        duration: totalCards * 3,
        ease: "none",
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      });
    });
  });


  return (
    <div className="md:sm:w-full md:sm:overflow-hidden">
      <div ref={recentEventCard} className="flex flex-row">
        {prevEventData.map((event, index) => (
          <div
            key={index}
            className="md:w-screen md:shrink-0 lg:w-1/4  flex flex-row justify-evenly lg:items-center px-4"
          >
            <RecentEventsCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentEventsMain;
