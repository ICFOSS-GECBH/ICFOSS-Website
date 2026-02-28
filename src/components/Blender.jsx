import { X } from "lucide-react";
import React from "react";

const Blender = () => {
  return (
    <div>
      <div className="bg-[#181818] w-48 h-16 flex items-center shadow-xl/70 px-4 rounded-2xl">
        <div className=" flex flex-row justify-between items-center gap-7 py-3 px-3">
          <img
            className="lg:max-w-10 max-w-8"
            src="https://imgs.search.brave.com/OswlnvIh2UFCWYdnXfvPbGlo839JFjQdRAAEec1xsFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvQmxlbmRlci1F/bWJsZW0tNTAweDI4/MS5wbmc"
            alt=""
          />
          <h1>Blender</h1>
        </div>
      </div>
    </div>
  );
};

export default Blender;
