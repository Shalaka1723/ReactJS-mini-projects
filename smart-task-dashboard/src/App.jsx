import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    // restore from localStorage on first render
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  const inputRef = useRef(null);
  const renderCountRef = useRef(0);

  // This increments on EVERY render
  renderCountRef.current += 1;

  console.log("App rendered");

  // runs ONCE (on mount)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    localStorage.setItem("count", count);
  }, [count]);

  const focusInput = () => {
    // DOM access via ref
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Task Dashboard</h1>
      <h2>useState + useEffect + useRef</h2>

      <p>Count: {count}</p>
      <p>Render count: {renderCountRef.current}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <hr />

      <input ref={inputRef} placeholder="Click button to focus me" />
      <br />
      <button onClick={focusInput}>Focus Input</button>

    </div>
  );
}

export default App;
