//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [paused, setPaused] = useState(false);
  const handleClick = () => {
    setPaused((current) => !current);
  };
  useEffect(() => {
    console.log(paused);
  }, [paused]);
  return (
    <button onClick={handleClick}>
      {paused ? <p>Start</p> : <p>Pause</p>}
    </button>
  );
}

export default CountdownTimer;
