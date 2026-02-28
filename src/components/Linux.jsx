import { X } from "lucide-react";
import React from "react";

const Linux = () => {
  return (
    <div className="bg-[#181818] w-48 h-16 flex items-center shadow-xl/70 px-4 rounded-2xl">
      <div className=" flex flex-row justify-between items-center gap-7 py-3 px-3">
        <img
          className="lg:max-w-10 max-w-8"
          src="https://imgs.search.brave.com/4EeHjatg1EO041d2y7ulC8532QFmX7rNaAsX4IOqUbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzgvMi9saW51eC10/dXgtbG9nby1wbmdf/c2Vla2xvZ28tODQ1/MDkucG5n"
          alt=""
        />
        <h1>Linux</h1>
      </div>

      {/* <div className="lg:w-3/4 w-10">blank div for space</div> */}

      {/* <div className="px-5"> */}
        {/* <X size={20} /> */}
      {/* </div> */}
    </div>
  );
};

export default Linux;
