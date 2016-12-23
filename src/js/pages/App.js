// @flow
import React from 'react';
import './App.css'

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

class App extends React.Component {
  render(){
    return (
      <div className="outer-container">
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
        <div className="bottom-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
