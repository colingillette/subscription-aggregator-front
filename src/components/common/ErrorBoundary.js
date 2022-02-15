import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDeprivedStateFromError(error) {
    console.log("ErrorBoundary:getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {} // Error can be logged

  render() {
    console.log("ERRORBOUNDARY render");
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      }
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
