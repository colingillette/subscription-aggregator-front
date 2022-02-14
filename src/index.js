import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { render } from "react-dom";

import App from "./components/App";

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("mountNode"));
}
