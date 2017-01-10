//@flow
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Project.css';
import _ from 'lodash';
import Img1 from './../../img/01.jpg';
import Img2 from './../../img/02.jpg';
import Img3 from './../../img/03.jpg';
import Img4 from './../../img/04.jpg';

export default class Project extends React.Component {
  constructor(props){
    super(props);
    const data = this.props.data
    const title = this.props.params.title
    const projectImg = [Img1, Img2, Img3, Img4];

    if (projectImg.length = Object.keys(data).length){
      var j = 0
      for (var i in data) {
        data[i].img = projectImg[j]
        j++
      }
    }

    const project = _.findKey(data, function(o) {
      return o.title.toLowerCase() === title.toLowerCase();
    });

    const projectObject = data[project]

    this.state = {project : projectObject}

  }
    render() {
    const { params } = this.props;
    const { title } = params;
    const project = this.state.project;
    const img = project.img;
    const desc = project.desc;
    const type = project.type;
    const tech = project.tech;

    function JSXForm(data){
      return data.map((t, i) =>
      <span key={i}>{t} </span>)
    }

    const typeList = JSXForm(type);
    const techList = JSXForm(tech);
    // const typeList = type.map((t, i) =>
    // <span key={i}>{t} </span>);
    // const techList = tech.map((t, i) =>
    // <span key={i}>{t} </span>)

    return (
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <div className="sections">
            <div className="container-title">
              <div className="title">{title}</div>
            </div>
            <img src={img} alt=""/>
            <p>{desc}</p>
            <p>{techList}</p>
            <p>{typeList}</p>
          </div>
          <Link to="/">Back</Link>
    </ReactCSSTransitionGroup>
    )
  }
}
