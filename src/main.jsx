// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // 👈 STYLE BOOTSTRAP
import "bootstrap-icons/font/bootstrap-icons.css"; // 👈 ICONS BOOTSTRAP

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
