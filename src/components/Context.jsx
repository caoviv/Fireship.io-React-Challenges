import React from "react";
import { useContext, useState } from "react";
export const CountContext = React.createContext();

function Context() {
  const [count, setCount] = useState(0);

  function Count() {
    return (
      <div>
        <p>{count}</p>
        <CountButton />
      </div>
    );
  }

  function CountButton() {
    const [count, setCount] = useContext(CountContext);
    return <button onClick={() => setCount(count + 1)}>Increment</button>;
  }
  return (
    <div>
      <h2>Context</h2>
      <p>
        Create 'CountContext' and 'CountProvider' that uses{" "}
        {`{(count, setCount)}`} as its values. This will allow the count and
        setCount function to be passed to any of its {`{children}`} in the tree.
        Create 2 components Count and CountButton that can each call
        useContext(CountContext) to update the count and display the current
        count value.
      </p>
      <CountContext.Provider value={[count, setCount]}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

export default Context;
