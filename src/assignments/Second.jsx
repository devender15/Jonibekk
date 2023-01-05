import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [textSize, setFontSize] = useState(12);
  const [fontVal, setFontVal] = useState("");
  const navigate = useNavigate();

  return (
    <div className="p-2 my-6">
      <h2 className="text-center text-3xl">Select your choices</h2>
      <div className="flex flex-col justify-center items-center mt-4 space-y-4  w-[50%] mx-auto p-1">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name"
          className="border-b-2 border-black outline-none py-1 px-2"
        />

        <div className="flex space-x-3 items-center">
          <label htmlFor="bg-color">Select color for bg</label>
          <input
            type="color"
            id="bg-color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="cursor-pointer"
          />
          <p>{bgColor}</p>
        </div>

        <div className="flex space-x-3 items-center">
          <label htmlFor="text-color">Select color for text</label>
          <input
            type="color"
            id="text-color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="cursor-pointer"
          />
          <p>{textColor}</p>
        </div>

        <div className="flex space-x-3 items-center">
          <label htmlFor="font-size">Select font size</label>
          <input
            type="range"
            id="font-size"
            value={textSize}
            onChange={(e) => setFontSize(e.target.value)}
            min="12"
            max="48"
            step="1"
            className="cursor-pointer"
          />
          <p>{textSize}px</p>
        </div>

        <div className="flex items-center">
          <p className="mr-5">Select font</p>
          <div
            className="flex items-center space-x-4 "
            value={fontVal}
            onChange={(e) => setFontVal(e.target.value)}
          >
            <input type="radio" value="mono" name="font" /> mono
            <input type="radio" value="sans-serif" name="font" /> sans-serif
            <input type="radio" value="cursive" name="font" /> cursive
          </div>
        </div>
      </div>

      <div className="border-2 w-[50%] mx-auto mt-10 h-fit">
        <h2
          style={{
            fontSize: textSize + "px",
            backgroundColor: bgColor,
            color: textColor,
            fontFamily: fontVal === "mono" ? "monospace" : (fontVal === "cursive" ? "cursive" : "sans-serif")
          }}
          className="text-center p-2"
        >
          {name}
        </h2>
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          className="w-30 p-2 bg-red-600 rounded-md text-white cursor-pointer"
          onClick={() => {
            setName("");
            setFontSize(12);
            setBgColor("white");
            setTextColor("black");
          }}
        >
          RESET
        </button>
      </div>

      <button
        className="bg-gradient-to-r mt-4 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        onClick={() => navigate("/assignment/")}
      >
        Back
      </button>
    </div>
  );
};

export default Second;
