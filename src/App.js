// import "./App.css";
import Components from "./components/Components";
import Icon from "./components/Icon";
import ConditionalRendering from "./components/ConditionalRendering";
import { useState, useEffect } from "react";
import Loops from "./components/Loops";
import State from "./components/State";
import LifecycleAndEffects from "./components/LifecycleAndEffects";
import Context from "./components/Context";
import ErrorBoundaries from "./components/ErrorBoundaries";
import Events from "./components/Events";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const label = "Press Me";
  const handleLoading = () => {
    setIsLoading((current) => !current);
  };
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

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
      <h1>Vivian React Challenges Workspace</h1>
      <p>
        This is a project space to complete the Fireship.io React challenges. Image by <a href="https://www.freepik.com/free-vector/white-abstract-background_11852424.htm">Freepik</a>
      </p>
      <div className="ChallengesWrapper">
        <Components icon={<Icon />}>
          <p>The body of the the component</p>
        </Components>
        <ConditionalRendering
          loadingState={isLoading}
          label={label}
          onClick={handleLoading}
        />
        <Loops />
        <Events />
        <State prevCount={prevCount} count={count} onClick={handleIncrement} />
        <LifecycleAndEffects hr={1} min={30} sec={45} />
        <Context />
        <ErrorBoundaries />
      </div>
    </div>
  );
}

export default App;
