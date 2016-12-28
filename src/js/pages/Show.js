import React from 'react'
import Projects from '../components/Projects'

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    const projectTitle = [];
    const projectDesc = [];
    const projectType = [];
    const projectImg = [];


    Object.keys(data).forEach(function(i) {
      projectDesc.push(data[i].desc)
    });

    Object.keys(data).forEach(function(i) {
      projectType.push(data[i].type)
    });

    Object.keys(data).forEach(function(i) {
      projectImg.push(data[i].img)
    });

    Object.keys(data).forEach(function(i) {
      projectTitle.push(data[i].title)
    });

    const project = [];
    Object.keys(data).forEach(function(i){
      project.push(data[i])
    })

    this.state = {project: project};
  }
  render() {
    // const {params} = this.props;
    console.log(this.state.project)
    const projectList = this.state.project.map((data, i) =>
    <Projects key={i} data={data} />);

    // projectTitle.map((title, i) => <Projects key={i} title={title}/>);
    return (
      <div className="sections">
        <div className="container-title">
          <h1>My Playground</h1>
        </div>
        <div className="section">{projectList}</div>
      </div>
    )
  }
}
