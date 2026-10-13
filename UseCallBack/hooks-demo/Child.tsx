import React from "react";

type ChildProps = {
  onClick: () => void;
};

function Child({ onClick }: ChildProps) {
  console.log("Child Rendered");

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h2>Child Component</h2>

      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
}

export default React.memo(Child);