//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.

function IncrementButton(props) {
  return (
    <div>
      <h2>State</h2>
      <p>Implement a handleClick() function to handle state using useState().</p>
      <p>Current count:{props.count}</p>
      <p>Previous count:{props.prevCount}</p>
      <button onClick={props.onClick}>Increment</button>
    </div>
  );
}

export default IncrementButton;
