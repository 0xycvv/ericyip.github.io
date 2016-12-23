//@flow
import React from 'react';

export default class Project extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h4 className="title">{title}</h4>
        <p>Project AAsdfagasdgadg</p>
      </div>
    )
  }
}
