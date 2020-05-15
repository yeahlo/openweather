import ReactDOM from "react-dom"
import React from "react";

import './style.css'
import App from "./App";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;
