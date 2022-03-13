import React, { useState } from "react";

// functional component
//stateless functional components
function Welcome(props) {
  const [result, setResult] = useState(10);
  const [double, setDouble] = useState(result * 2);

  console.log(result);
  console.log(double);

  return (
    <h1 onClick={() => setResult((prevResult) => prevResult + 1)}>
      Hello, {props.name} {result}
    </h1>
  );
}

export default Welcome;
