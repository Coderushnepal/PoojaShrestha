import React from "react";

// functional component

function App(props) {
  return <h1>Hello, {props.name} </h1>;
}

// class-based component

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };
//   }

//   handleIncrement = () => {
//     this.setState({count: this.state.count + 1});
//   };

//   handleDecrement = () => {
//     this.setState({count: this.state.count - 1});
//   };

//   render() {
//     console.log(this.props);
//     const { count } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleIncrement}>+</button> {count} 
//         <button onClick={this.handleDecrement}>-</button>
//       </div>
//     );
//   }
// }

export default App;
