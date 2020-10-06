import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import { createBrowserHistory } from "history";
import { Route, Router } from "react-router";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Home} exact={true} />
    <Route path="/filme/:id" component={MovieDetails} exact={true} />
  </Router>,
  document.getElementById("root")
);
