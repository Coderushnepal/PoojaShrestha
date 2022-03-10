import React from 'react';

class MaxSpeedIndicator extends React.Component {
    componentWillUnmount = () => {
      console.log('Component will unmount');
    };
  
    componentDidUpdate = () => {
      console.log('Max Component did update');
    };
  
    componentDidMount = () => {
      console.log("Max Component did mount");
    };
  
    render() {
      return <h3>Max limit reached</h3>;
    }
}
  
  
class MinSpeedIndicator extends React.Component {
    render() {
      return <h3>Min limit reached</h3>;
    }
}
  
class OnRangeSpeedIndicator extends React.Component {
    // constructor() {
    //   super();
    //   }
  /*
    componentDidMount = () => {
      const timerId = setInterval( () => {
        console.log('interval');
      }, 2000);
  
      this.setState({timerId});
    };
  
    componentWillUnmount = () => {
      clearInterval(this.state.timerId);
  
      console.log("Range speed indicator component will unmount");
    };*/
  
    render() {
      return <h3>Speed on range</h3>
    }
}
  
// class-based component

class SpeedIndicator extends React.Component {
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
  
      if (this.state.count < 0) return <MinSpeedIndicator />; //<h3>Min limit reached</h3>
  
      return <OnRangeSpeedIndicator />;
    };
  
    componentDidMount = () => {
      console.log("Component did mount");
    }
  
    componentDidUpdate = (preProps, prevState) => {
      if(prevState.count > 10) {
        console.log("Speed out of range"); //could be api calls, notifications etc
      }
    }
  
    // static getDerivedStateFromProps(props, state) {
    //   console.log(props);
  
    //   return {count: props.name};
    // }
  
    shouldComponentUpdate = (preProps, prevState) => {
      console.log(this.state.count); //state will increase but won't be reflected on UI
  
      if(this.state.count > 10) {
        return false;
      }
  
      return true;
    }
  
    render() {
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

export default SpeedIndicator;
  