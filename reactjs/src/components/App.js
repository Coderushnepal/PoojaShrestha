import React from "react"; //{Component}
import List from "./List";
import Click from "./Click";
import Hover from "./Hover";
import Welcome from "./Welcome";
import SpeedIndicator from "./SpeedIndicator";
import Calculator from "./Calculator";


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      list: ['Apple', 'Mango', 'Banana', 'Grapes'],
      favorite: "Apple",
    };

    //this.handleListAdd = this.handleListAdd.bind.apply(this); //applicable when not using fat arrow function
  }

  handleListAdd = () => {
    const enteredFruit = prompt("Enter the name of fruit");

    if(!enteredFruit){
      return;
    }

    this.setState({list: [...this.state.list, enteredFruit]});
  };
    

  render() {
    
    return (
      <React.Fragment>
        <Welcome name="World" />
        <SpeedIndicator />
        <h1>Number of fruits = {this.state.list.length}</h1>
        <List list = {this.state.list} onAdd={this.handleListAdd}/>
        <Click />
        <Hover />
        <Calculator />
      </React.Fragment>
    );
  }
}
  
export default App;


