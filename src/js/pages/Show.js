// @flow
import React from 'react'
import Project from '../components/Project'

export default class Show extends React.Component{
  render() {
    const Projects = [
      "D3 Bar",
      "Three.js",
      "P5.js",
      "Animation",
      "Prototype"
    ].map((title, i) => <Project key={i} title={title}/> );
    return (
      <div className="sections">
        <div className="container-title">
          <h1>Show Room</h1>
        </div>
        <div className="section">{Projects}</div>
      </div>
    )
  }
}
