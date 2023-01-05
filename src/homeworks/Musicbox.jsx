import React from "react";
import FirstSound from "../assets/first.wav";
import SecondSound from "../assets/second.wav";
import ThirdSound from "../assets/third.wav";
import FourthSound from "../assets/fourth.wav";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { GiAmplitude } from "react-icons/gi";


const Musicbox = ({ audio }) => {

  const handleChange = (e) => {
    audio.volume = e.target.value;
  };

  // updating the progress bar as music changes
  audio.addEventListener("timeupdate", () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById("progress-bar").value = progress;
  })


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="px-4 py-2 flex flex-col w-1/2 h-1/2 justify-center items-center shadow-lg space-y-10">
        <div className="w-full">
          <input type="range" id="progress-bar" className="w-full cursor-pointer" value={0} min={0} max={100} />
        </div> 

        <div className="flex space-x-4">
          <div className="grid grid-cols-2 gap-4">
            <FaPlayCircle
              fontSize={40}
              title="play"
              className="cursor-pointer"
              onClick={() => audio.play()}
            />
            <FaPauseCircle
              fontSize={40}
              title="pause"
              className="cursor-pointer"
              onClick={() => audio.pause()}
            />

            <GiAmplitude fontSize={40} title="sound effect 1" className="cursor-pointer" onClick={() => {
              let first =  new Audio(FirstSound);
              first.play();
            }}/>
            <GiAmplitude fontSize={40} title="sound effect 2" className="cursor-pointer" onClick={() => {
              let second =  new Audio(SecondSound);
              second.play();
            }}/>
            <GiAmplitude fontSize={40} title="sound effect 3" className="cursor-pointer" onClick={() => {
              let third =  new Audio(ThirdSound);
              third.play();
            }}/>
            <GiAmplitude fontSize={40} title="sound effect 4" className="cursor-pointer" onClick={() => {
              let fourth =  new Audio(FourthSound);
              fourth.play();
            }}/>

          </div>

          <div className="flex flex-col items-center">
            <input type="range" max={1} min={0} step="0.01" onChange={handleChange} className="cursor-pointer" />
            <p>Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicbox;