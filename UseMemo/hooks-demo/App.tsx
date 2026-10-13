import { useMemo, useState } from "react";

function slowFunction(num: number) {
  console.log("Running slow function...");

  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

function App() {
  console.log("App Rendered");

  const [count, setCount] = useState<number>(0);

  const [text, setText] = useState<string>("");

  const result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>useMemo Demo</h1>

      <hr />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <hr />

      <h2>Expensive Result: {result}</h2>
    </div>
  );
}

export default App;
