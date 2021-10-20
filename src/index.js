import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './assets/css/root.css';
import './assets/scss/_shortcut.scss';
import App from "./pages/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
