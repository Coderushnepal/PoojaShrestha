import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const list = useSelector((state) => state.list);
  console.log(list);

  return <h1>No of fruits = {list.length}</h1>;
}

export default Heading;