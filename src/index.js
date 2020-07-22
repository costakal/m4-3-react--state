import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import data from "./data";

const rootElement = document.getElementById("root");

ReactDOM.render(<App data={data.books} />, rootElement);
