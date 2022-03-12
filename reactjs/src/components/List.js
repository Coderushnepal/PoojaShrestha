import React from "react";


class List extends React.Component {

  render() {
    const { list, onAdd } = this.props; //props before while on apps

    return (
      <>
      {/* <h1>Number of fruits = {list.length}</h1> */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
    ))}
    <button onClick={onAdd}>+</button>
      </ul></>
    );
  }
}

export default List;
