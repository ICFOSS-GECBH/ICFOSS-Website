import { Calendar } from "lucide-react";
import React from "react";

const RecentEventsCard = (props) => {
  const eventData = props.event;

  return (
    <div className="mx-5 my-5">
      <div className="bg-[#1E1E1E] w-70 min-h-[620px] rounded-3xl overflow-hidden flex flex-col ">
        <div className="h-[40%] relative overflow-hidden">
          <div className="absolute top-0 left-0 z-10 p-2">
            <p className="bg-[#155DFC] px-3 py-1 rounded-full text-center text-white text-xs font-semibold">
              {eventData.top}
            </p>
          </div>
          <img
            className="w-full h-full object-cover"
            src={eventData.img}
            alt="Event"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-white px-6 text-center gap-y-6">
          
          {/* Heading */}
          <h4 className="font-bold text-lg">
            {eventData.Heading}
          </h4>

          {/* Date and Details Container */}
          <div className="flex flex-col items-center gap-y-4">
            <div className="flex flex-row gap-2 items-center text-gray-300">
              <Calendar size={14} />
              <p className="text-[11px]">{eventData.Date}</p>
            </div>
            
            <p className="text-[12px] leading-relaxed">
              {eventData.Details}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecentEventsCard;