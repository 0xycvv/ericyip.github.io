//@flow
import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Nav.css';

export default class Nav extends React.Component{
  render() {
    return(
      <div className="nav">
        <div className="inner-nav">
          <div className="nav-title">
            <IndexLink to="/">Eric Yip</IndexLink>
          </div>
          <div className="nav-link">
            <Link to="About">About</Link>
          </div>
        </div>
      </div>
  )
  }
}
