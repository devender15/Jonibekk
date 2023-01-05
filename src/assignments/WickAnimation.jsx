import React from "react";
import { useNavigate } from "react-router-dom";

import Animation from "../assets/wick.gif";
import Project from "../assets/project.wick";

const WickAnimation = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 w-full h-full flex flex-col justify-center items-center space-y-4">
      <img
        src={Animation}
        autoPlay={true}
        loop
        className="w-1/2 h-1/2 mx-auto"
        alt="animation"
      />

      <a
        href={Project}
        download
        className="px-2 py-1 bg-green-500 rounded-md text-white font-semibold"
      >
        Download wick file
      </a>

      <button
        className="bg-gradient-to-r mt-4 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        onClick={() => navigate("/assignment/")}
      >
        Back
      </button>
    </div>
  );
};

export default WickAnimation;
