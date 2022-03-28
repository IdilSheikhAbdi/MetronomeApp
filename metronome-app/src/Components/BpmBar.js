import React from "react";

const BpmBar = (props) => {
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

export default BpmBar;
