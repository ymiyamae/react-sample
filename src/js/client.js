import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from './vendor/bootstrap-without-jquery.min';

import Favorites from "./pages/Favorites";
import Layout   from "./pages/Layout";
import Settings from "./pages/Settings";
import Todos    from "./pages/Todos";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="favorites(/:favorite)" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
