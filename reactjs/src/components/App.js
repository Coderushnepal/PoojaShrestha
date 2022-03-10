import React from "react"; //{Component}

class MaxSpeedIndicator extends React.Component {
  componentWillUnmount = () => {
    console.log('Component will unmount');
  }

  componentDidUpdate = () => {
    console.log('Max Component did update');
  }

  componentDidMount = () => {
    console.log("Max Component did mount");
  }

  render() {
    return <h3>Max limit reached</h3>;
  }
}

/*
class MinSpeedIndicator extends React.Component {
  render() {
    return <h3>Min limit reached</h3>;
  }
}

class OnRangeSpeedIndicator extends React.Component {
  render() {
    return <h3>Speed on range</h3>;
  }
}*/



// functional component

function Welcome(props) {
  return <h1>Hello, {props.name} </h1>;
}

// class-based component

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  speedIndicator = () => {
    if (this.state.count > 10) return <MaxSpeedIndicator />;

    if (this.state.count < 0) return <h3>Min limit reached</h3>;

    return <h3>Value on range</h3>;
  };

  componentDidMount = () => {
    console.log("Component did mount");
  }

  componentDidUpdate = () => {
    console.log('Component did update');
  }



  render() {
    // console.log(this.props);
    const { count } = this.state;
    return (
      <div>
        {this.speedIndicator()}
        {/* <h1>Hello {this.props.name}</h1>
        {count > 10 ? (
          <h3>Max limit reached</h3>
        ) : count < 0 ? (
          <h3>Min limit reached</h3>
        ) : (
          <h3>Value on range</h3>
        )} */}
        <button onClick={this.handleIncrement}>+</button> {count}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export { App, Welcome };
