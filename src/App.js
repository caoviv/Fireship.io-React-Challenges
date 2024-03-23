// import "./App.css";
import Card from "./components/Card";
import Icon from "./components/Icon";
import LoadingButton from "./components/LoadingButton";
import { useState, useEffect } from "react";
import ListOfAnimals from "./components/ListOfAnimals";
import IncrementButton from "./components/IncrementButton";
import CountdownTimer from "./components/CountdownTimer";
import Context from "./components/Context";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const label = <p>Press Me</p>;
  const handleLoading = () => {
    setIsLoading((current) => !current);
  };
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const [textValue, setTextValue] = useState("");
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };
  useEffect(() => {
    console.log(textValue);
  }, [textValue]);

  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const handleIncrement = () => {
    setPrevCount(count);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="App">
      <Card icon={<Icon />}>
        <p>The body of the card</p>
      </Card>
      <LoadingButton
        loadingState={isLoading}
        label={label}
        onClick={handleLoading}
      />
      <ListOfAnimals />
      <h2>Events</h2>
      <p>
        Implement a text input that updates the input value and logs the event
        target.
      </p>
      <input type="text " value={textValue} onChange={handleTextChange} />
      <IncrementButton
        prevCount={prevCount}
        count={count}
        onClick={handleIncrement}
      />
      <CountdownTimer hr={1} min={30} sec={45} />
      <Context />
      <h1>🚨Error Boundaries</h1>
      <p>
        Create an ErrorBoundary class component that provides a fallback UI in
        the event an error occurs.
      </p>
      <p>This is outside the Error Boundary</p>
      <ErrorBoundary>
        <p>There is no error</p>
      </ErrorBoundary>
    </div>
  );
}

export default App;
