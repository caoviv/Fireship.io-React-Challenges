/*
Implement a CountdownTimer component that implements useState() and useEffect() in conjunction with setInterval to handle the timer.
Make sure you use the useEffect() hook to call clearTimeout() when the component is destroyed.
*/
import { useEffect, useState } from "react";

function CountdownTimer({ hr, min, sec }) {
  const [[h, m, s], setTimer] = useState([hr, min, sec]);

  const [paused, setPaused] = useState(true);

  const handlePause = () => {
    setPaused((current) => !current);
  };

  const handleReset = () => {
    setTimer([hr, min, sec]);
  };

  const timeFormat = (number) => {
    return number.toString().padStart(2, "0");
  };

  useEffect(() => {
    if (paused) {
      return;
    }
    const intervalId = setInterval(() => {
      if (s === 0) {
        setTimer([m - 1, 59]);
      } else {
        setTimer([m, s - 1]);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [paused, m, s]);

  return (
    <div>
      <p>
      {timeFormat(h)}:{timeFormat(m)}:{timeFormat(s)}
      </p>
      <button onClick={handlePause}>
        {paused ? <p>Start</p> : <p>Pause</p>}
      </button>
      <button onClick={handleReset}>
        <p>Reset</p>
      </button>
    </div>
  );
}

export default CountdownTimer;
