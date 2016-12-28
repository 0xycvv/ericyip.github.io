//@flow
import React from 'react';
import { Link } from 'react-router';
import './Project.css';

export default class Projects extends React.Component {
  render() {
    const { title } = this.props.data;
    const { desc } = this.props.data;
    const { img } = this.props.data;
    const projectLink = "/project/" + title.toLowerCase();
    console.log(this.props.data)
    return (
      <div className="project">
        <h4 className="title">{title}</h4>
        <Link to={projectLink} >More</Link>
        <p>{desc}</p>
      </div>
    )
  }
}
