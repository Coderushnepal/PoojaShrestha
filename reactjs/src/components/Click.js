import React from "react";
import withCounter from "./hoc/withCounter";

class Click extends React.Component {

    render() {
        return (<div>
            <h3>Click Count: {this.props.count}</h3>
            
            <button onClick={this.props.onIncrease}>Click Me</button></div>
        );
    }
}


export default withCounter(Click);