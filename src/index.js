import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./Store.js";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import LoginForm from "./loginform/LoginForm.js";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
