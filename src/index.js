import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

class Index {
  render() {
    return (
      <div className="Index">
        <App />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
