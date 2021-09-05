import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "@cloudtunes/themes/default";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
