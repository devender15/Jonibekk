import React from "react";
import { useNavigate } from "react-router-dom";

const AssignmentPage = ({
  LandscapeMusicAudio,
  SnowMusicAudio,
  NightMusicAudio,
}) => {
  const navigate = useNavigate();
  LandscapeMusicAudio.pause();
  SnowMusicAudio.pause();
  NightMusicAudio.pause();

  return (
    <div>
      <h1 className="text-center mt-4 text-2xl">Select Assignment</h1>
      <div className="grid grid-cols-2 gap-4 p-4 mt-6">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/landscape")}
        >
          Cartoon
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/form")}
        >
          Form
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/animation")}
        >
          Animation
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/data-visualization")}
        >
          Data Visualization
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/speech-recognition")}
        >
          Speech Recognition
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/animated-scene")}
        >
          Animated Scene
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/assignment/drag-n-drop")}
        >
          Drag And Drop
        </button>

        <button
          className="bg-gradient-to-r mt-4 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AssignmentPage;
