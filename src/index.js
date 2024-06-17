import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
