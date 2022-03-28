import React from "react";
import "./Scrollbar.css";

const Scrollbar = (props) => {
  const onChangeHandler = (event) => {
    const currentBPM = event.target.value;
    props.startMetronome(props.playing, currentBPM);
    props.changeBpmValue((_) => currentBPM);
  };
  return (
      <input
        min={1}
        max={218}
        type="range"
        value={props.bpm}
        onInput={onChangeHandler}
      />
  );
};

export default Scrollbar;
