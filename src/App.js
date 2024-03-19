// import "./App.css";
import DisplayChallenge from "./components/DisplayChallenge";
import Card from "./components/Card";
import Icon from "./components/Icon";
import LoadingButton from "./components/LoadingButton";
import { useState, useEffect } from "react";
import ListOfAnimals from "./components/ListOfAnimals";
import IncrementButton from "./components/IncrementButton";
import CountdownTimer from "./components/CountdownTimer";

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
      <DisplayChallenge />
      <Card icon={<Icon />}>
        <p>The body of the card</p>
      </Card>
      <LoadingButton
        loadingState={isLoading}
        label={label}
        onClick={handleLoading}
      />
      <ListOfAnimals />
      <input type="text " value={textValue} onChange={handleTextChange} />
      <IncrementButton
        prevCount={prevCount}
        count={count}
        onClick={handleIncrement}
      />
      <CountdownTimer min={45} sec={5} />
    </div>
  );
}

export default App;
