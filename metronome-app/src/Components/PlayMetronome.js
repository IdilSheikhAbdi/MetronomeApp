import React from "react";
import "./PlayMetronome.css";
import play from "../Images/icons8-play-90.png"
import pause from "../Images/icons8-pause-90.png"

const PlayMetronome = (props) => {
  
  const changePlaying = () => {
    props.isPlaying((prev) => !prev);
    props.startMetronome(!props.playing, props.bpm)
  };

  return (
      <button className="button-1" onClick={changePlaying}> 
      {!props.playing ? 'START': 'STOP'} 
      </button>
  );
};
export default PlayMetronome;
