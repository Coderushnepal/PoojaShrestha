import React from "react";

function withCounter(Component) {
  return class WrappedComponent extends React.Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    };

    render() {
        return (<Component count={this.state.count} onIncrease ={this.handleIncrement} />);
    }
  };
}

export default withCounter;
