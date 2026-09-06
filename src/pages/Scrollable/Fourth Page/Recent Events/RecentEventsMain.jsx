import React, { useRef, useState, useEffect } from "react";
import RecentEventHero from "./RecentEventHero";
import RecentEventsCard from "./RecentEventsCard";
import prevEventData from "../../../../Data/PreviousEvent.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RecentEventsMain = () => {
  const recentEventCard = useRef();
  const tweenRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const totalCards = prevEventData.length;

  // --- DESKTOP: Auto-scroll with pause on hover ---
  useGSAP(() => {
    var mm = gsap.matchMedia();

    mm.add("(min-width:769px)", () => {
      const cardsVisible = 4;
      const scrollDistance =
        totalCards > cardsVisible ? (totalCards - cardsVisible) * 100 : 0;

      tweenRef.current = gsap.to(recentEventCard.current.children, {
        xPercent: -scrollDistance,
        duration: totalCards * 2,
        ease: "none",
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      });

      const container = recentEventCard.current.parentElement;

      const pause = () => tweenRef.current?.pause();
      const resume = () => tweenRef.current?.resume();

      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", resume);

      return () => {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", resume);
      };
    });

    return () => mm.revert();
  }, { scope: recentEventCard });

  // --- MOBILE: Auto-scroll + pause on touch + swipe ---
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width:768px)").matches;
    if (!isMobile) return;

    let autoPlay;

    const startAutoPlay = () => {
      autoPlay = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }, 2500);
    };

    const stopAutoPlay = () => clearInterval(autoPlay);

    startAutoPlay();
    return () => stopAutoPlay();
  }, [totalCards]);

  // Animate card slide on mobile when currentIndex changes
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width:768px)").matches;
    if (!isMobile || !recentEventCard.current) return;

    gsap.to(recentEventCard.current, {
      xPercent: -currentIndex * 100,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [currentIndex]);

  // --- Touch handlers for swipe ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      // Swipe left → next
      setCurrentIndex((prev) => Math.min(prev + 1, totalCards - 1));
    } else if (diff < -50) {
      // Swipe right → prev
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={recentEventCard}
        className="flex flex-row"
        style={{ willChange: "transform" }}
      >
        {prevEventData.map((event, index) => (
          <div
            key={index}
            className="w-screen shrink-0 md:w-screen lg:w-1/4 flex flex-row justify-evenly lg:items-center px-4"
          >
            <RecentEventsCard event={event} />
          </div>
        ))}
      </div>

      {/* Mobile dot indicators */}
      <div className="flex justify-center gap-2 mt-4 lg:hidden">
        {prevEventData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentEventsMain;