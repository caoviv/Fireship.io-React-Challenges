//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.

function LoadingButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.loadingState ? props.label : <p>loading</p> }
    </button>
  );
}

export default LoadingButton;
