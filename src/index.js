// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from "react-router";
import { createHashHistory } from 'history';


import App from './js/pages/App';
import Show from './js/pages/Show';
import About from './js/pages/About';

const app = document.getElementById('root');
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Show}></IndexRoute>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
  ,app
);
