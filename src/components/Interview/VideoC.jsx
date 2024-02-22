import React, { useEffect } from "react";
import "./video.css";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

let context;
let buf;

const VideoC = (data) => {
  useEffect(() => {
    function playByteArray(byteArray) {
      context = new AudioContext();

      const arrayBuffer = new ArrayBuffer(byteArray.length);
      const bufferView = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteArray.length; i++) {
        bufferView[i] = byteArray[i];
      }

      context.decodeAudioData(arrayBuffer, function (buffer) {
        buf = buffer;
        play();
      });
    }

    function play() {
      var source = context.createBufferSource();
      source.buffer = buf;
      source.connect(context.destination);
      source.start(0);
    }

    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    const test = async (data) => {
      console.log("audio lenght : ", data.audio.length);

      for (let i = data.audio.length - 1; i >= 0; i--) {
        if (data.audio[i].length) {
          const byteArrayObj = JSON.parse(data.audio[i]);
          const byteArray = [];
          for (let key in Object.keys(byteArrayObj)) {
            byteArray.push(byteArrayObj[key]);
          }
          playByteArray(byteArray);
          await sleep(1800);
        }
      }
    };
    test(data);
  }, [data]);

  return (
    <div className="vc">
      <div className="person"></div>

      <div className="ai">
        <div className="robo">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="robot"
          />

          {/* TextToSpeech.talk("Hello Beautiful World!"); */}
        </div>
      </div>
    </div>
  );
};

export default VideoC;
