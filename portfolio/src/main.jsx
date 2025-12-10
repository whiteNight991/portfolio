import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import $ from "jquery";
window.$ = $;

// fullpage.js와 CSS import
import "fullpage.js/dist/jquery.fullpage.min.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
