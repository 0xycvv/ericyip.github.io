import React from 'react'
import Projects from '../components/Projects'
import Img1 from './../../img/01.jpg';
import Img2 from './../../img/02.jpg';
import Img3 from './../../img/03.jpg';
import Img4 from './../../img/04.jpg';

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    // const projectTitle = [];
    // const projectDesc = [];
    // const projectType = [];
    const projectImg = [Img1, Img2, Img3, Img4];

    //
    // Object.keys(data).forEach(function(i) {
    //   projectDesc.push(data[i].desc)
    // });
    //
    // Object.keys(data).forEach(function(i) {
    //   projectType.push(data[i].type)
    // });
    if (projectImg.length = Object.keys(data).length){
      var j = 0
      for (var i in data) {
        data[i].img = projectImg[j]
        j++
      }
    }
    // Object.keys(data).forEach(function(i) {
    //   var j = 0
    //    data[i].img = projectImg[j]
    //    j++
    // });

    // Object.keys(data).forEach(function(i) {
    //   projectTitle.push(data[i].title)
    // });

    const project = [];
    Object.keys(data).forEach(function(i){
      project.push(data[i])
    })

    this.state = {project: project};
  }
  render() {
    // const {params} = this.props;
    // console.log(this.state.project)
    const projectList = this.state.project.map((data, i) =>
    <Projects key={i} data={data} />);

    // projectTitle.map((title, i) => <Projects key={i} title={title}/>);
    return (
      <div className="sections">
        <div className="container-title">
          <div className="title">My Playground</div>
        </div>
        <div className="section">{projectList}</div>
      </div>
    )
  }
}
