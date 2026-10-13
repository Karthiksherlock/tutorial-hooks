import { useRef, useState } from "react";

function App() {
  console.log("App Rendered");

  const [count, setCount] = useState(0);/

  const clickRef = useRef(0);

  const handleClick = () => {
   
    clickRef.current++;

   

    setCount((prev) => prev + 1);

    console.log(
      "Total clicks:",
      clickRef.current
    );
  };

  const showClicks = () => {
    alert(
      `Clicked ${clickRef.current} times`
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>
        Increment Count
      </button>

      <hr />

      <button onClick={showClicks}>
        Show Total Clicks
      </button>
    </div>
  );
}

export default App;