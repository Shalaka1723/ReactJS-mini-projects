import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContext } from "./context/UserContext";

const user = {
  name: "Shalaka",
  role: "Frontend Developer",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
