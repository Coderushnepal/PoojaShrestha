import React from "react"; //{Component}
import List from "./List";
import SpeedIndicator from "./SpeedIndicator";
import Welcome from "./Welcome";

class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Welcome name="World" />
        <SpeedIndicator />
        <List list= {['Apple', 'Mango', 'Banana', 'Grapes']}/>
        <button onClick={() => prompt("Enter the name of fruit")}>+</button>
      </React.Fragment>
    );
  }
}
  
export default App;


