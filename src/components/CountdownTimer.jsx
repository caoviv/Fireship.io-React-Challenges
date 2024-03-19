/*
Implement a CountdownTimer component that implements useState() and useEffect() in conjunction with setInterval to handle the timer.
Make sure you use the useEffect() hook to call clearTimeout() when the component is destroyed.
*/
import { useEffect, useState } from "react";

function CountdownTimer({ sec }) {
  const [s, setTimer] = useState(sec);

  const [paused, setPaused] = useState(true);

  const handlePause = () => {
    setPaused((current) => !current);
  };

  const handleReset = () => {
    setTimer(sec);
  };

  useEffect(() => {
    if (paused) {
      return;
    }
    const intervalId = setInterval(() => {
      if (s > 0) {
        setTimer(s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [paused, s]);

  return (
    <div>
      <p>{s}</p>
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
