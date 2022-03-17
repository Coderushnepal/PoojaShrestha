import React from 'react';

function Beer(props) {
  const {params} = props.match;
  return (
    <div>
      <h1>Beer {params.id}</h1>
      </div>
  )
}

export default Beer;