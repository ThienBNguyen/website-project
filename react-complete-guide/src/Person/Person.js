import React from "react";

const person = props => {
  return (
    <div>
      <p>
        my name is {props.name} and {props.age} years old{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default person;
