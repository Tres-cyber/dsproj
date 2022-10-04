import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root")!;
const dom = ReactDOM.createRoot(root);
dom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
