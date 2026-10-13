import React from "react";

type ChildProps = {
  user: {
    name: string;
  };
};

function Child({ user }: ChildProps) {
  console.log("Child Rendered");

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
      <h2>Child Component</h2>

      <p>User: {user.name}</p>
    </div>
  );
}

export default React.memo(Child);