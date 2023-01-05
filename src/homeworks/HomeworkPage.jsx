import React from "react";
import { useNavigate } from "react-router-dom";


const HomeworkPage = ({ MusicBoxAudio }) => {
  const navigate = useNavigate();

  MusicBoxAudio.pause();

  return (
    <div>
      <h1 className="text-center mt-4 text-2xl">Select Homework</h1>

      <div className="grid grid-cols-2 gap-4 p-4 mt-6">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/homework/lab1")}
        >
          Lab #1
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/homework/lab2")}
        >
          Lab #2
        </button>

        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          onClick={() => navigate("/homework/lab3")}
        >
          Lab #3
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

export default HomeworkPage;
