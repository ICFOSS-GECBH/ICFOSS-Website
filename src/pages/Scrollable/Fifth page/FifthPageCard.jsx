import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

const FifthPageCard = ({ project }) => {
  const projectPlat = project.platform;
  const contributionCount = project.Contribution || 0;
  

  return (
    <div>
      <div className=" flex flex-row">
        <div className="mx-12 my-5">
          <div className="bg-[#1E1E1E] min-w-[300px] min-h-[400px] h-fit rounded-3xl overflow-hidden ">
            <div className="object-cover max-h-[40%] w-full relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={project.img}
                alt="AI generated image"
              />
            </div>

            <div className="text-white px-3 flex flex-col gap-y-4 mx-5">
              <div className="flex flex-col items-center content-center gap-y-7 ">
                <h4 className="py-2 relative top-5">{project.heading}</h4>
                <p className="text-[10px] ">{project.para}</p>
              </div>

              <div className="flex flex-col justify-start gap-y-5 py-3 px-10">
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-3">
                  {projectPlat.map((platformName, index) => (
                    <button
                      key={index}
                      className="bg-[#263238] min-w-[68px] w-fit h-fit px-5 py-1 text-[9px] rounded-lg"
                    >
                      {platformName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="">
                <h6 className="text-[10px] text-[#E3E3E3]">
                  {contributionCount}+ Contributors
                </h6>
              </div>

              <div className="flex items-center justify-center w-full py-4  active:scale-95">
                <button className="bg-[#155DFC] px-10 py-1 rounded w-full my-2">
                  View Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPageCard;
