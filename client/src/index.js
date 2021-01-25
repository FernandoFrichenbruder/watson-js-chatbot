import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

if (localStorage.session) {
  const session = localStorage.session;
  localStorage.clear();
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = session;
} else {
  localStorage.clear();
  delete axios.defaults.headers.common["session_id"];
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);