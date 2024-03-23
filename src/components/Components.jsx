function Components(props) {
  return (
    <div className="Challenge">
      <div className="ChallengeDescription">
        <h2>🗃️ Components</h2>
        <p>
          Define a set of 2 components - Card and Icon. the card takes the icon as
          a prop, then renders custom HTML below it with props.children.
        </p>
      </div>
      <div className="ChallengeSolutionWrapper">
        <p>{props.icon} Card Title</p>
        {props.children}
      </div>
    </div>
  );
}

export default Components;
