import React from "react";
import ReactDOM from "react-dom";
import "../src/vendors/css/materialize.css";
import "../src/vendors/css/style.css";
import "../src/vendors/css/custom/custom.css";
import "../src/vendors/vendors/perfect-scrollbar/perfect-scrollbar.css";
import "../src/vendors/vendors/flag-icon/css/flag-icon.min.css";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
