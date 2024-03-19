function Context(props) {
  return (
    <div>
      <h2>Context</h2>
      <p>
        Create 'CountContext' and 'CountProvider' that uses {`{(count, setCount)}`} as
        its values. This will allow the count and setCount function to be passed
        to any of its {`{children}`} in the tree. Create 2 components Count and
        CountButton that can each call useContext(CountContext) to update the
        count and display the current count value.
      </p>
    </div>
  );
}

export default Context;
