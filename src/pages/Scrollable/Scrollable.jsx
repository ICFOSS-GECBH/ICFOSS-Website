import React from "react";
import SecondHero from "./Second Page/SecondHero";
import ThirdMain from "./Third Page/ThirdMain";
import SecondPage from "./Second Page/SecondPage";
import {
  Calendar,
  Clock,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react";
import FourthMain from "./Fourth Page/FourthMain";
import FifthPageMain from "./Fifth page/FifthPageMain";
import FifthPageCard from "./Fifth page/FifthPageCard";
import FifthPageButton from "./Fifth page/FifthPageButton";
import SixthPageMain from "./Sixth Page/SixthPageMain";
import LastPageMain from "./Last Page/LastPageMain";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Scrollable = () => {
  return (
    <div>
      <div className="overflow-hidden w-screen h-fit flex flex-col lg:gap-6 "
      style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div
          id="home"
          className="w-screen h-screen"
          style={{
            background: "linear-gradient(to bottom, #1e3a5f, #0f2847)", // EDIT: Card gradient
          }}
        >
          <SecondPage />
        </div>
        <div
          id="about"
          className="bg-black h-screen w-screen "
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <ThirdMain />
        </div>

        <div
          id="events"
          className="bg-black w-screen h-fit min-h-screen "
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FourthMain />
        </div>

        <div
          id="projects"
          className="flex flex-col  bg-black h-fit w-screen "
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FifthPageMain />
        </div>

        <div
          id="team"
          className="bg-black w-screen h-screen"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <SixthPageMain />
        </div>

        <div
          className="bg-black w-screen h-fit "
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LastPageMain />
        </div>
      </div>
    </div>
  );
};

export default Scrollable;
