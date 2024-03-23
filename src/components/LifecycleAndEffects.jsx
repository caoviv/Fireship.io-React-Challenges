/*
Implement a CountdownTimer component that implements useState() and useEffect() in conjunction with setInterval to handle the timer.
Make sure you use the useEffect() hook to call clearTimeout() when the component is destroyed.
*/
import { useEffect, useState } from "react";

function LifecycleAndEffects({ hr, min, sec }) {
  const [[h, m, s], setTimer] = useState([hr, min, sec]);
  const [paused, setPaused] = useState(true);
  const [finished, setFinished] = useState(false);

  const handlePause = () => {
    setPaused(!paused);
  };

  const handleReset = () => {
    setTimer([hr, min, sec]);
    setPaused(true);
    setFinished(false);
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
    <div className="Challenge">
      <h2>🌱 Lifecycle and Effects</h2>
      <p>
        Implement a CountdownTimer component that implements useState() and
        useEffect() in conjunction with setInterval to handle the timer. Make
        sure you use the useEffect() hook to call clearTimeout() when the
        component is destroyed.
      </p>
      <div className="ChallengeSolutionWrapper">
        <p>
          {timeFormat(h)}:{timeFormat(m)}:{timeFormat(s)}
        </p>
        <button className="Button" onClick={handlePause}>
          {paused ? "Start" : "Pause"}
        </button>
        <button className="Button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default LifecycleAndEffects;
