import React from "react";
const TapTempo = (props) => {
  let firstTap = true;
  let startTime = null;
  let endTime = null;
  let times = [];
  const tempoHandler = () => {
    if (firstTap) {
      startTime = Date.now();
      firstTap = !firstTap;
    } else {
      endTime = Date.now();
      const timeDifference = endTime - startTime;
      //calculating tempo for 1/4 note (one beat)
      let tempo = (60 / timeDifference) * 1000;

      if (tempo > 218) {
        tempo = 218;
      }
      tempo = Math.round(tempo);
      props.changeBpmValue(tempo);
      props.startMetronome(props.playing, tempo);
    }
  };
  return (
    <button className="button-1" onClick={tempoHandler}>
      TAP TWICE TEMPO
    </button>
  );
};

export default TapTempo;
