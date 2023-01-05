import { Routes, Route } from "react-router-dom";
import BarChart from "./homeworks/BarChart";
import First from "./assignments/First";
import Second from "./assignments/Second";
import Third from "./assignments/Third";
import Fourth from "./assignments/Fourth";
import Home from "./Home";
import AssignmentPage from "./assignments/AssignmentPage";
import HomeworkPage from "./homeworks/HomeworkPage";
import Musicbox from "./homeworks/Musicbox";
import SpeechRecog from "./assignments/SpeechRecog";
import WickAnimation from "./assignments/WickAnimation";
import Resume from "./homeworks/Resume";
import DragnDrop from "./assignments/DragnDrop";
// importing audio
import LandscapeMusic from "./assets/dragndrop/garden.mp3";
import SnowMusic from "./assets/dragndrop/snow.mp3";
import NightMusic from "./assets/dragndrop/night.mp3";
import MusicboxAudio from "./assets/1.mp3";

function App() {
  const MusicBoxAudio = new Audio(MusicboxAudio);
  const LandscapeMusicAudio = new Audio(LandscapeMusic);
  const SnowMusicAudio = new Audio(SnowMusic);
  const NightMusicAudio = new Audio(NightMusic);

  return (
    <Routes>
      <Route
        exact
        path="/*"
        element={
          <Home
            MusicBoxAudio={MusicBoxAudio}
            LandscapeMusicAudio={LandscapeMusicAudio}
            SnowMusicAudio={SnowMusicAudio}
            NightMusicAudio={NightMusicAudio}
          />
        }
      />
      <Route
        exact
        path="/homeworks/"
        element={<HomeworkPage MusicBoxAudio={MusicBoxAudio} />}
      />
      <Route exact path="/homework/lab1" element={<BarChart />} />
      <Route
        exact
        path="/homework/lab2"
        element={<Musicbox audio={MusicBoxAudio} />}
      />
      <Route exact path="/homework/lab3" element={<Resume />} />
      <Route
        exact
        path="/assignment/"
        element={
          <AssignmentPage
            LandscapeMusicAudio={LandscapeMusicAudio}
            SnowMusicAudio={SnowMusicAudio}
            NightMusicAudio={NightMusicAudio}
          />
        }
      />
      <Route exact path="/assignment/landscape" element={<First />} />
      <Route exact path="/assignment/form" element={<Second />} />
      <Route exact path="/assignment/animation" element={<Third />} />
      <Route exact path="/assignment/data-visualization" element={<Fourth />} />
      <Route
        exact
        path="/assignment/speech-recognition"
        element={<SpeechRecog />}
      />
      <Route
        exact
        path="/assignment/animated-scene"
        element={<WickAnimation />}
      />
      <Route
        exact
        path="/assignment/drag-n-drop"
        element={
          <DragnDrop
            LandscapeMusicAudio={LandscapeMusicAudio}
            SnowMusicAudio={SnowMusicAudio}
            NightMusicAudio={NightMusicAudio}
          />
        }
      />
    </Routes>
  );
}

export default App;
