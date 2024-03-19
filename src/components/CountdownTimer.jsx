/*
Implement a CountdownTimer component that implements useState() and useEffect() in conjunction with setInterval to handle the timer.
Make sure you use the useEffect() hook to call clearTimeout() when the component is destroyed.
*/
import { useEffect, useState } from "react";

function CountdownTimer({ hr, min, sec }) {
  const [[h, m, s], setTimer] = useState([hr, min, sec]);
  const [paused, setPaused] = useState(true);
  const [finished, setFinished] = useState(false);

  const handlePause = () => {
    setPaused(!paused);
  };

  const handleReset = () => {
    setTimer([hr, min, sec]);
    setPaused(true)
    setFinished(false)
  };

  const timeFormat = (number) => {
    return number.toString().padStart(2, "0");
  };

  const tick = () => {
    if (paused || finished) {
      return;
    }
    if (h === 0 && m === 0 && s === 0) {
      setFinished(true);
    } else if (m === 0 && s === 0) {
      setTimer([h - 1, 59, 59]);
    } else if (s === 0) {
      setTimer([h, m - 1, 59]);
    } else {
      setTimer([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const ticker = setInterval(tick, 1000);
    return () => {
      clearInterval(ticker);
    };
  });

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
