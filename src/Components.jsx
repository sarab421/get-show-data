import React from "react";

const Component = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.id}</h2>
        <p>{props.body}</p>
      </div>
  );
};

export default Component;
