import React from "react";

interface Props {
  children: React.ReactNode;
  fallBackComponent: React.ReactNode;
  resetCondition?: any;
  error?: boolean;
}

interface State {
  hasError: boolean;
  resetCondition: any;
}

/**
 * Working in two cases:
 * 1. Error in javascript during render. Render fallback component
 * 2. Error in hooks during render, example useState,useEffect. Render fallback component
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, resetCondition: props.resetCondition };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.resetCondition !== prevState.resetCondition) {
      return { hasError: false, resetCondition: nextProps.resetCondition };
    }
    return null;
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return this.props.fallBackComponent;
    }
    return this.props.children;
  }
}
