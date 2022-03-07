import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.state.count++;
  };

  handleDecrement = () => {
    this.state.count -= 1;
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button> {count}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default App;
