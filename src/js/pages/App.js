// @flow
import React from 'react';
import './App.css'

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.route.data
    }
  }
  render(){
    return (
      <div className="outer-container">
        <Nav />
        <div className="container">
          {React.cloneElement(this.props.children, {data: this.state.data})}
        </div>
        <div className="bottom-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
