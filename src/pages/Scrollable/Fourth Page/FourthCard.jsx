import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

const FourthCard = (props) => {
  const eventData = props.event;
  return (
    <div>
      <div className=" lg:flex lg:flex-row mx-10 lg:w-fit  ">
        <div className="lg:my-10 my-5">
          <div className="bg-[#1E1E1E] w-70 lg:min-h-[493px] rounded-3xl overflow-hidden h-fit ">
            <div className="object-cover lg:max-h-[40%] aspect-video w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 z-10 p-2">
                <p className="bg-[#155DFC] lg:px-3 lg:py-1 rounded-full text-center text-white lg:text-xs font-semibold text-[10px] px-3 py-1 ">
                  {eventData.top}
                </p>
              </div>

              <img
                className="w-full h-full object-cover"
                src={eventData.image}
              />
            </div>

            <div className="text-white lg:px-3 flex flex-col lg:gap-y-4 lg:mx-5 px-2 gap-y-3">
              <div className="flex flex-col items-center content-center lg:gap-y-7 gap-y-3">
                <h4 className="py-2 relative lg:top-5 top-3 ">
                  {eventData.Heading}
                </h4>
                <p className="lg:text-[10px] text-[8px]">{eventData.para}</p>
              </div>

              <div className="flex flex-col justify-start gap-y-5 py-3">
                <div className="flex flex-row gap-1 content-center items-center ">
                  <Calendar size={10} />
                  <p className="lg:text-[10px] text-[8px]">{eventData.Date}</p>
                </div>
                <div className="flex flex-row gap-1 content-center items-center ">
                  <Clock size={10} />
                  <p className="lg:text-[10px] text-[8px]">{eventData.Time}</p>
                </div>

                <div className="flex flex-row gap-1 content-center items-center ">
                  <MapPin size={10} />
                  <p className="lg:text-[10px] text-[8px]">
                    {eventData.Location}{" "}
                  </p>
                </div>
                <div className="flex items-center justify-center w-full py-4 active:scale-95">
                  <button className="bg-[#155DFC] px-10 py-1 rounded text-[12px] ">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthCard;
