import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Something went horribly wrong", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Fallback UI</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
