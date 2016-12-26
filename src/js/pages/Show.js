import React from 'react'
import Projects from '../components/Projects'

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    const projectTitle = [];

    Object.keys(data).forEach(function(key) {
      projectTitle.push(data[key].title)
    });
    this.state = {project: projectTitle};
  }
  render() {
    // const {params} = this.props;
    const projectList = this.state.project.map((title, i) => <Projects key={i} title={title}/>);
    console.log(projectList)
    // projectTitle.map((title, i) => <Projects key={i} title={title}/>);
    return (
      <div className="sections">
        <div className="container-title">
          <h1>Show Room</h1>
        </div>
        <div className="section">{projectList}</div>
      </div>
    )
  }
}
