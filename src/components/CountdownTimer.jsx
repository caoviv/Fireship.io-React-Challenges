//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.
import { useEffect, useState } from "react";

function CountdownTimer({ hr, min, sec }) {
  const [[h, m, s], setTimer] = useState([1, 30, 0]);

  const [paused, setPaused] = useState(false);
  const handlePause = () => {
    setPaused((current) => !current);
  };
  useEffect(() => {
    let interval;
    if (!paused) {
      interval = setInterval(() => {
        if (s > 0) {
          setTimer((s) => s - 1);
        } else if (m > 0) {
          setTimer((m) => m - 1);
        }
      });
    }
    return () => clearInterval(interval);
  }, [paused]);

  const handleReset = () => {
    setTimer({ hr, min, sec });
  };
  useEffect(() => {
    console.log(paused);
  }, [paused]);
  return (
    <div>
      <p>
        {[h]}:{[m]}:{[s]}
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
