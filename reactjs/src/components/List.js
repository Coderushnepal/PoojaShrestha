import React from "react";

class List extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
    ))}
      </ul>
    );
  }
}

export default List;
