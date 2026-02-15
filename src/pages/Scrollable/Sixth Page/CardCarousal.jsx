import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const CardCarousel = ({
  data = [],
  autoPlayInterval = 3000,
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalCards = data.length;

  /* -------------------- REFS -------------------- */
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* -------------------- SLIDE LOGIC -------------------- */
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  /* -------------------- AUTOPLAY -------------------- */
  useEffect(() => {
    if (autoPlay && !isHovered && totalCards > 0) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, isHovered, autoPlayInterval, totalCards, currentIndex]);

  /* -------------------- KEYBOARD CONTROLS -------------------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* -------------------- TOUCH CONTROLS -------------------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const delta = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (delta > swipeThreshold) nextSlide();
    if (delta < -swipeThreshold) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* -------------------- VISIBLE CARDS -------------------- */
  const getVisibleCards = () => {
    if (totalCards === 0) return [];
    return [-1, 0, 1].map((pos) => {
      const index = (currentIndex + pos + totalCards) % totalCards;
      return { ...data[index], position: pos, index };
    });
  };

  const visibleCards = getVisibleCards();

  if (!totalCards) {
    return (
      <div className="h-96 flex items-center justify-center text-gray-400">
        No data provided
      </div>
    );
  }

  return (
    <div
      className="relative w-full py-16 px-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* CARD AREA */}
      <div className="relative flex items-center justify-center h-96 max-w-5xl mx-auto">

        {/* PREV BUTTON (desktop only) */}
        <motion.button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 z-20 p-2 text-cyan-400"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronLeft size={48} />
        </motion.button>

        {/* CARDS */}
        <div className="relative flex items-center justify-center w-full h-full">
          {visibleCards.map((card) => (
            <motion.div
              key={card.index}
              className="absolute"
              animate={{
                x:
                  card.position === 0
                    ? 0
                    : card.position === -1
                    ? -260
                    : 260,
                scale: card.position === 0 ? 1 : 0.85,
                opacity: card.position === 0 ? 1 : 0.6,
                zIndex: card.position === 0 ? 10 : 5,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <motion.div
                className="w-64 rounded-xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, #1e3a5f, #0f2847)",
                }}
                whileHover={{ y: -6 }}
              >
                <div className="h-72">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-300 text-sm">
                    {card.occupation}
                  </p>
                  <h3 className="text-white text-xl font-semibold">
                    {card.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* NEXT BUTTON (desktop only) */}
        <motion.button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 z-20 p-2 text-cyan-400"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronRight size={48} />
        </motion.button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {data.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="h-2 rounded-full"
            animate={{
              width: currentIndex === index ? 24 : 8,
              backgroundColor:
                currentIndex === index ? "#22d3ee" : "#6b7280",
            }}
          />
        ))}
      </div>

      {/* MOBILE HINT */}
      <p className="text-center text-gray-400 text-sm mt-4 md:hidden">
        Swipe left or right
      </p>
    </div>
  );
};

export default CardCarousel;
