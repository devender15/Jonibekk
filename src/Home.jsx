import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({
  MusicBoxAudio,
  LandscapeMusicAudio,
  SnowMusicAudio,
  NightMusicAudio,
}) => {
  const navigate = useNavigate();

  MusicBoxAudio.pause();
  LandscapeMusicAudio.pause();
  SnowMusicAudio.pause();
  NightMusicAudio.pause();

  return (
    <div>
      {" "}
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section>
          <nav className="py-10 mb-8 flex justify-between">
            <h1 className="text-lg font-sans font-bold">Portfolio</h1>
            <ul className="flex items-center">
              <li className="text-lg">My Work</li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jonibek Karshiev
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">CISC 3610.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              You can see my Homework and Assignments by visiting the two
              options below.
            </p>
          </div>

          <div className="flex justify-between px-auto mx-auto">
            <button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              onClick={() => navigate("/homeworks/")}
            >
              Homeworks
            </button>

            <button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              onClick={() => navigate("/assignment/")}
            >
              Assignments
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
