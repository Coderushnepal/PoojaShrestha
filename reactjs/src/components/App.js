import React from "react"; //{Component}
import List from "./List";
import SpeedIndicator from "./SpeedIndicator";
import Welcome from "./Welcome";
import Click from "./Click";
import Hover from "./Hover";


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      list: ['Apple', 'Mango', 'Banana', 'Grapes'],
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
      </React.Fragment>
    );
  }
}
  
export default App;


