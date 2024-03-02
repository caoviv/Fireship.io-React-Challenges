// import "./App.css";
import DisplayChallenge from "./components/DisplayChallenge";
import Card from "./components/Card";
import Icon from "./components/Icon";
import LoadingButton from "./components/LoadingButton";
import { useState } from "react";
import { useEffect } from "react";
import ListOfAnimals from "./components/ListOfAnimals";
import TextInput from "./components/TextInput";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const label = <p>Press Me</p>;
  const handleClick = () => {
    setIsLoading((current) => !current);
  };
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className="App">
      <DisplayChallenge />
      <Card icon={<Icon />}>
        <p>The body of the card</p>
      </Card>
      <LoadingButton
        loadingState={isLoading}
        label={label}
        onClick={handleClick}
      />
      <ListOfAnimals />
      <TextInput />

    </div>
  );
}

export default App;
