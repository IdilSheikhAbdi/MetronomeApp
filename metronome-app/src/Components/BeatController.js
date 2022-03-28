import React, { useState } from "react";
import classnames from "classnames";

const BeatController = (props) => {
  const [buttonSelected, setButtonSelected] = useState(1);
  const changeBeat = (event) => {
    setButtonSelected(parseInt(event.target.value))
    props.setBeatCount(parseInt(event.target.value));
    props.isPlaying(false);
    clearInterval(props.timer)
  };

  return (
    <div className="beat-buttons">
      <button
        className="button-2"
        style={{ backgroundColor: buttonSelected !== 1 ? "pink" : "#F082AC" }}
        value={1}
        onClick={changeBeat}
      >
        1
      </button>
      <button
        className="button-2"
        style={{ backgroundColor: buttonSelected !== 2 ? "pink" : "#F082AC" }}
        value={2}
        onClick={changeBeat}
      >
        2
      </button>
      <button
        className="button-2"
        style={{ backgroundColor: buttonSelected !== 3 ? "pink" : "#F082AC" }}
        value={2}
        onClick={changeBeat}
        value={3}
        onClick={changeBeat}
      >
        3
      </button>
      <button
        className="button-2"
        style={{ backgroundColor: buttonSelected !== 4 ? "pink" : "#F082AC" }}
        value={2}
        onClick={changeBeat}
        value={4}
        onClick={changeBeat}
      >
        4
      </button>
    </div>
  );
};

export default BeatController;
