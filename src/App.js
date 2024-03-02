// import "./App.css";
import MyComponent from "./MyComponent";
import Card from "./Card";
import Icon from "./Icon";
import LoadingButton from "./LoadingButton";
import { useState } from "react";
import { useEffect } from "react";
import ListOfAnimals from "./ListOfAnimals";

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
      <MyComponent />
      <Card icon={<Icon />}>
        <p>The body of the card</p>
      </Card>
      <LoadingButton
        loadingState={isLoading}
        label={label}
        onClick={handleClick}
      />
      <ListOfAnimals />
    </div>
  );
}

export default App;
