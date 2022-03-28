import React, {useState} from "react";
import classnames from 'classnames';


const BeatController = (props) => {
  const[active, setActive]  = useState();
  const changeBeat = (event) => {
    
    console.log(event.target.value)
    props.setBeatCount(parseInt(event.target.value));
    props.isPlaying(false);
    clearTimeout(props.timer);
  };
  

  return (
    <div className='beat-buttons'>
      <button className={classnames('button-2', active)} value={1} onClick={changeBeat}>1</button>
      <button className="button-2" value={2}  onClick={changeBeat}>2</button>
      <button className="button-2" value={3} onClick={changeBeat}>3</button>
      <button className="button-2" value={4} onClick={changeBeat}>4</button>
    </div>
  );
};

export default BeatController;
