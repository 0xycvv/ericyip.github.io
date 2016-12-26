// @flow
import React from 'react'
import Projects from '../components/Projects'

export default class Show extends React.Component{
  render() {
    const { params } = this.props;
    console.log(this.props)

    const ProjectList = [
      "D3Bar",
      "Threejs",
      "P5js",
      "Animation",
      "Prototype"
    ].map((title, i) => <Projects key={i} title={title}/> );
    return (
      <div className="sections">
        <div className="container-title">
          <h1>Show Room</h1>
        </div>
        <div className="section">{ProjectList}</div>
      </div>
    )
  }
}
