import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerIsUp, setTimerIsUp] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          //change minutes value only
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          //timer is over, start new session OR break
          setSeconds(59);
          let minutes = timerIsUp ? 24 : 4;
          setMinutes(minutes);
          setTimerIsUp(!timerIsUp);
        }
      } else {
        //change seconds value only
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes, timerIsUp]);

  return (
    <div>
      <div className="message">
        {timerIsUp && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}

export default Timer;
