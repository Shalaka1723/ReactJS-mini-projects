import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

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
