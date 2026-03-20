import React from "react";
import SecondPage from "./Second Page/SecondPage";
import ThirdMain from "./Third Page/ThirdMain";
import FourthMain from "./Fourth Page/FourthMain";
import FifthPageMain from "./Fifth page/FifthPageMain";
import SixthPageMain from "./Sixth Page/SixthPageMain";
import LastPageMain from "./Last Page/LastPageMain";
import Navbar from "../../components/Navbar";

const Scrollable = () => {
  return (
    <>

      {/* Main page wrapper */}
      <div className="overflow-x-hidden w-screen min-h-screen flex flex-col bg-black">
        
        {/* HOME */}
        <section
          id="home"
          className="relative w-screen min-h-screen"
          style={{
            background: "linear-gradient(to bottom, #1e3a5f, #0f2847)",
          }}
        >
          <SecondPage />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative w-screen min-h-screen"
          style={{
            backgroundImage: "url('Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <ThirdMain />
        </section>

        {/* EVENTS */}
        <section
          id="events"
          className="relative w-screen min-h-screen pb-24"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FourthMain />
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative w-screen h-auto min-h-0 pb-12"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FifthPageMain />
        </section>

        {/* TEAM */}
        <section
          id="team"
          className="relative w-screen min-h-screen"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <SixthPageMain />
        </section>

        {/* FOOTER / LAST PAGE */}
        <section
          className="relative w-screen min-h-fit"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LastPageMain />
        </section>

      </div>
    </>
  );
};

export default Scrollable;
