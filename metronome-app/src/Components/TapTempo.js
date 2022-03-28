import React from "react";
import "./TapTempo.css";
const TapTempo = (props) => {
  let firstTap = true;
  let startTime = null;
  let endTime = null;
  let times = [];
  const tempoHandler = () => {
    if (firstTap) {
      startTime = Date.now();
      console.log("start: ", startTime);
      firstTap = !firstTap;
    } else {
      endTime = Date.now();
      const timeDifference = endTime - startTime;
      //calculating tempo for 1/4 note (one beat)
      let tempo = (60 / timeDifference) * 1000;

      //check the a
      if (tempo > 218) {
        tempo = 218;
      }
      tempo = Math.round(tempo);
      console.log("beats: ", tempo);
      props.changeBpmValue(tempo);
      props.startMetronome(props.playing, tempo);
    }
    console.log("times:", times);
  };
  return (
    <button className="button-1" onClick={tempoHandler}>
      TAP TEMPO
    </button>
  );
};

export default TapTempo;
