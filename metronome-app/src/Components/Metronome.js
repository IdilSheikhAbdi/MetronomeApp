import React, { useEffect, useState } from "react";
import PlayMetronome from "./PlayMetronome";
import BpmBar from "./BpmBar";
import TapTempo from "./TapTempo";
import metronomeClick from "../Sounds/click1.wav";
import metronomeClick2 from "../Sounds/mechanicalSound2.wav";
import BeatController from "./BeatController";
import "./Metronome.css";
const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [playing, isPlaying] = useState(false);
  const [timer, setTimer] = useState();
  const [beatCount, setBeatCount] = useState(1);

  let sound = new Audio(metronomeClick);
  let sound2 = new Audio(metronomeClick2);
  let beat = 0;

  const startMetronome = (playing, bpm) => {
    clearInterval(timer);
    if (playing === true) {
      setTimer(
        setInterval(() => {
          playSound();
        }, (60 / bpm) * 1000)
      );
    }
  };

  const playSound = () => {
    if (beatCount > 1 && beat % beatCount === 0) {
      sound2.play();
    } else {
      sound.play();
    }
    beat += 1;
  };

  return (
    <div className="box-container">
      <h3> Metronome </h3>
      <BpmBar
        bpm={bpm}
        changeBpmValue={setBpm}
        playing={playing}
        startMetronome={startMetronome}
      />
      <div className="bpm-value">{bpm} BPM</div>
      <PlayMetronome
        bpm={bpm}
        playing={playing}
        isPlaying={isPlaying}
        startMetronome={startMetronome}
      />
      <TapTempo
        bpm={bpm}
        changeBpmValue={setBpm}
        startMetronome={startMetronome}
        playing={playing}
        playSound={playSound}
      />

      <BeatController
        setBeatCount={setBeatCount}
        playing={playing}
        isPlaying={isPlaying}
        startMetronome={startMetronome}
        playSound={playSound}
        timer={timer}
        bpm={bpm}
      />
    </div>
  );
};

export default Metronome;
