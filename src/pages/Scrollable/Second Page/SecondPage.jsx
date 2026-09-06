import React from "react";
import Navbar from "../../../components/Navbar";
import MainButton from "../../Main Page/MainButton";
import SecondHero from "./SecondHero";
import SecondButton from "./SecondButton";
import SecondComponents from "./SecondComponents";

const SecondPage = () => {
  return (
    <div className="  ">
      <Navbar />
      <div className="w-screen absolute top-1/2 left-1/2 text-white  items-center text-center transform -translate-x-1/2 -translate-y-1/2 gap-5 overflow-hidden h-fit lg:my-20 my-10">
        <SecondHero />
        <SecondButton />

        <div className="flex items-center justify-evenly w-screen">
          <SecondComponents />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
