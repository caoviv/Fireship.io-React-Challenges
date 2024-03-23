import ErrorBoundary from "./ErrorBoundary";
function ErrorBoundaries(props) {
  return (
    <div className="Challenge">
      <h2>🚨Error Boundaries</h2>
      <p>
        Create an ErrorBoundary class component that provides a fallback UI in
        the event an error occurs.
      </p>
      <div className="ChallengeSolutionWrapper">
        <p>This is outside the Error Boundary</p>
        <ErrorBoundary>
          <p>There is no error</p>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default ErrorBoundaries;
