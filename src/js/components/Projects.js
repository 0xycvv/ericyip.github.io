//@flow
import React from 'react';
import { Link } from 'react-router';
import './Project.css';

export default class Projects extends React.Component {
  render() {
    const { title } = this.props;
    const projectLink = "/project/" + title;
    // console.log(this.props.params.title);

    return (
      <div className="project">
        <h4 className="title">{title}</h4>
        <Link to={projectLink} >More</Link>
        <p>Project AAsdfagasdgadg</p>
      </div>
    )
  }
}
