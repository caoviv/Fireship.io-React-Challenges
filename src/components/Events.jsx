import { useState, useEffect } from "react";

function Events() {
  const [textValue, setTextValue] = useState("");
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };
  useEffect(() => {
    console.log(textValue);
  }, [textValue]);
  return (
    <div>
      <h2>💥 Events</h2>
      <p>
        Implement a text input that updates the input value and logs the event
        target.
      </p>
      <input type="text " value={textValue} onChange={handleTextChange} />
    </div>
  );
}

export default Events;
