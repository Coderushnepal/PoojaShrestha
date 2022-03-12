import React from "react";
import withCounter from "./hoc/withCounter";

class Hover extends React.Component {

    render() {
        return (<div>
            <h3>Hover Count: {this.props.count}</h3>
           <button onMouseEnter={this.props.onIncrease}>Hover Me</button> 
           </div>
        );
    }
}

export default withCounter(Hover);