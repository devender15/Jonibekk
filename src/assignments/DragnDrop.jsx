import React, { useState } from "react";

// importing backgrounds
import Bg1 from "../assets/dragndrop/bg1.jpg";
import Bg2 from "../assets/dragndrop/bg2.jpg";
import Bg3 from "../assets/dragndrop/bg3.jpg";

// importing characters
import Char1 from "../assets/dragndrop/boy-playing.png";
import Char2 from "../assets/dragndrop/pikachu.png";
import Char3 from "../assets/dragndrop/char3.png";
import Char4 from "../assets/dragndrop/char4.png";
import Char5 from "../assets/dragndrop/char5.png";
import Char6 from "../assets/dragndrop/char6.png";
import Char7 from "../assets/dragndrop/char7.png";

// importing audio
import ItemSound from "../assets/first.wav";


const DragnDrop = ({
  LandscapeMusicAudio,
  SnowMusicAudio,
  NightMusicAudio,
}) => {
  const data = [
    {
      id: 1,
      src: Char1,
    },
    {
      id: 2,
      src: Char2,
    },
    {
      id: 3,
      src: Char3,
    },
    {
      id: 4,
      src: Char4,
    },
    {
      id: 5,
      src: Char5,
    },
    {
      id: 6,
      src: Char6,
    },
    {
      id: 7,
      src: Char7,
    },
  ];

  const [placed, setPlaced] = useState(false);
  const [id, setId] = useState("");

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", id);
    const audio = new Audio(ItemSound);
    audio.play();
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    setPlaced(true);
  }

  return (
    <div className="h-screen">
      <h1 className="font-semibold text-xl text-center my-2">
        Create your own funny scene
      </h1>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-1 h-1/2 w-full"
        droppable="true"
        onDrop={(e) => drop(e)}
        id="bg"
        onDragOver={(e) => allowDrop(e)}
      >
        <div className="flex flex-col space-y-4">
          <div
            className="w-full h-[90%]"
            style={{
              background: `url(${Bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <button
            className="px-2 py-1 text-white bg-green-500 rounded-md"
            onClick={() => {
              SnowMusicAudio.pause();
              NightMusicAudio.pause();
              LandscapeMusicAudio.play();
            }}
          >
            Play Landscape music
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <div
            className="w-full h-[90%]"
            style={{
              background: `url(${Bg2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <button
            className="px-2 py-1 text-white bg-green-500 rounded-md"
            onClick={() => {
              LandscapeMusicAudio.pause();
              NightMusicAudio.pause();
              SnowMusicAudio.play();
            }}
          >
            Play Snow music
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <div
            className="w-full h-[90%]"
            style={{
              background: `url(${Bg3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <button
            className="px-2 py-1 text-white bg-green-500 rounded-md"
            onClick={() => {
              LandscapeMusicAudio.pause();
              SnowMusicAudio.pause();
              NightMusicAudio.play();
            }}
          >
            Play Night music
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 items-center">
        {data?.map((img) => {
          return (
            <div
              key={img.id}
              id={"item-" + img.id}
              className="m-2 w-30 h-20 text-center"
              onDragOver={(e) => allowDrop(e)}
            >
              <img
                src={img.src}
                id={"item-" + img.id}
                alt="character"
                onMouseOver={(e) => setId(e.target.id)}
                onDrop={(e) => drag(e)}
                className={`${
                  placed ? "w-1/3" : "w-full"
                } h-full cursor-pointer m-2`}
                draggable="true"
                onDragStart={(e) => drag(e)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DragnDrop;
