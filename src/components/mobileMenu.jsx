import { useState } from "react";

const menuItems = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Events", sectionId: "events" },
  { label: "Project", sectionId: "projects" },
  { label: "Team", sectionId: "team" },
];

const MobileMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePress = (index, sectionId) => {
    setActiveIndex(index);
    scrollToSection(sectionId);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex w-full max-w-sm flex-col gap-4">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => handlePress(i, item.sectionId)}
            className={`
              w-full rounded-full py-4 text-lg font-medium tracking-wide text-foreground
              backdrop-blur-xl bg-secondary/40 border
              transition-all duration-300 ease-out active:scale-95
              ${
                activeIndex === i
                  ? "border-primary shadow-[0_0_16px_hsl(var(--primary)/0.25)]"
                  : "border-border"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;