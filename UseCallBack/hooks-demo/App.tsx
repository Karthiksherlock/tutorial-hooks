import { useCallback, useState } from "react";

import Child from "./Child";

function App() {
  console.log("App Rendered");

  const [count, setCount] = useState<number>(0);

  const [text, setText] = useState<string>("");

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>useCallback Demo</h1>

      <hr />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <hr />

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <hr />

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
