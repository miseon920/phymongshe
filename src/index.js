import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import App from "./App";
import Scroll from "./components/Scroll";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Scroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
