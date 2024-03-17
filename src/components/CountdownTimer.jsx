//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.
import { useEffect, useState } from "react";

function CountdownTimer({ hr, min, sec }) {
  const [s, setTimer] = useState(60);

  const [paused, setPaused] = useState(true);

  const handlePause = () => {
    setPaused((current) => !current);
  };

  const handleReset = () => {
    console.log();
  };

  useEffect(() => {
    if (s > 0) {
      setTimer(s-1);
    }
    console.log("Paused state updated");
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
