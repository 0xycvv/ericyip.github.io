//@flow
import React from 'react';
import { Link } from 'react-router';
import './Project.css';

export default class Projects extends React.Component {
    render() {
    const { params } = this.props;
    const { title } = params;

    return (
      <div className="project">
        <h4 className="title">{title}</h4>
        <p>Project AAsdfagasdgadg</p>
      </div>
    )
  }
}
