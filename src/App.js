// import "./App.css";
import MyComponent from "./components/MyComponent";
import Card from "./components/Card";
import Icon from "./components/Icon";
import LoadingButton from "./components/LoadingButton";
import { useState } from "react";
import { useEffect } from "react";
import ListOfAnimals from "./components/ListOfAnimals";

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
