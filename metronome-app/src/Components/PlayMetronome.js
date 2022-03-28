import React from "react";

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
