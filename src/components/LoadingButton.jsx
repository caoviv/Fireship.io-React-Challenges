//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.

function LoadingButton(props) {
  return (
    <div>
      <h2>Loading Button</h2>
      <p>Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.</p>
      <button onClick={props.onClick}>
        {props.loadingState ? props.label : <p>loading</p>}
      </button>
    </div>
  );
}

export default LoadingButton;
