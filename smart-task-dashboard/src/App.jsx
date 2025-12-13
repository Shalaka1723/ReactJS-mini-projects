import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    // restore from localStorage on first render
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  console.log("App rendered");

  // STEP 02-A: runs ONCE (on mount)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // STEP 02-B: runs when count changes
  useEffect(() => {
    console.log("Count changed:", count);
    document.title = `Count: ${count}`;
  }, [count]);

  // STEP 02-C: sync state to localStorage
  useEffect(() => {
     localStorage.setItem("count", count);
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Task Dashboard</h1>
      <h2>Step 01 – useState</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
