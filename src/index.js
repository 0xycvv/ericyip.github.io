// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from "react-router";
import { createHashHistory } from 'history';


import App from './js/pages/App';
import Show from './js/pages/Show';
import About from './js/pages/About';
import Project from './js/components/Project';
import myData from './data.json'

const app = document.getElementById('root');
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const NotFound = () => (
  <h1 className="footer">404. this page is not found!</h1>
)

const projectIsExist = function(transition, replace) {
  const ProjectList = []
  Object.keys(myData).forEach(function(i){
    ProjectList.push(myData[i].title.toLowerCase())
  })
  console.log(transition)
  const hasIndex = ProjectList.indexOf(transition.params.title.toLowerCase());
  if (hasIndex === -1){
    replace('/*')
  }
};

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" data={myData} component={App}>
      <IndexRoute component={Show}></IndexRoute>
        <Route path="/project/:title" component={Project} onEnter={projectIsExist}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
  ,app
);
