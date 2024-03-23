//Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.

function ConditionalRendering(props) {
  return (
    <div>
      <h2>🔀 Conditional Rendering</h2>
      <p>
        Define a LoadingButton component. The button takes loading state,
        onClick, and label as props then renders the label or loader depending
        on the loading state.
      </p>
      <div className="ChallengeSolutionWrapper">
        <button className="Button" onClick={props.onClick}>
          {props.loadingState ? props.label : "Loading"}
        </button>
      </div>
    </div>
  );
}

export default ConditionalRendering;