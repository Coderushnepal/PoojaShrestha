import React from 'react'

function Double(props) {

const {doubleFunction, value} = props;
  return (
    <div>Double value = {doubleFunction(value)}</div>
  )
}

export default Double;