import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecog = () => {
  const [message, setMessage] = useState("");
  const [radius, setRadius] = useState(0);
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const commands = [
    {
      command: "help",
      callback: () =>
        setMessage(
          "Say color, followed by a color, to set the circle color. Say size, followed of a number from 1 to 300, to set the diameter of the circle."
        ),
    },
  ];

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (transcript.includes("colour")) {
      let final = transcript.slice(7);
      setColor(final);
    }

    if (transcript.includes("size")) {
      let final = transcript.slice(5);

      if (parseInt(final) > 300 || parseInt(final) <= 1) {
        setMessage("Enter valid radius");
      } else {
        setRadius(parseInt(final));
        setMessage("");
      }
    }
  }, [transcript]);

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };

  return (
    <div className="flex flex-col space-y-6 w-full h-screen justify-center items-center">
      <div
        className={` rounded-full`}
        style={{
          backgroundColor: color ? color : "black",
          width: radius ? ((radius >= 300 || radius <= 1) ? "300px" : 2 * radius + "px") : "50px",
          height: radius ? ((radius >= 300 || radius <= 1) ? "300px" : 2 * radius + "px") : "50px",
        }}
      ></div>

      <div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={
              !listening ? listenContinuously : SpeechRecognition.stopListening
            }
            className="px-4 py-2 bg-green-500 font-semibold rounded-md text-white cursor-pointer outline-none border-none"
          >
            {listening ? "Stop" : "Speak"}
          </button>
          <button
            type="button"
            onClick={resetTranscript}
            className="px-4 py-2 bg-red-500 font-semibold rounded-md text-white cursor-pointer outline-none border-none"
          >
            Reset
          </button>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">User: {transcript}</span>
            <span className="font-semibold text-sm">{message}</span>
          </div>
        </div>
        <button
        className="bg-gradient-to-r mt-4 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        onClick={() => navigate("/assignment/")}
      >
        Back
      </button>
      </div>
    </div>
  );
};

export default SpeechRecog;
