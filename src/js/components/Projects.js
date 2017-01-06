//@flow
import React from 'react';
import { Link } from 'react-router';
import './Projects.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Projects extends React.Component {
  render() {
    const { title } = this.props.data;
    const { desc } = this.props.data;
    const { img } = this.props.data;
    const projectLink = "/project/" + title.toLowerCase();

    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
        ><div className="project-list">
         <Link to={projectLink}><div className="img-wrapper">
              <img src={img}/>
          <div className="overlay-card">
            <div className="overlay-title">
              {title}
              {/* <h3 className="overlay-title-text">{title}</h3> */}
            </div>
          </div>
        </div></Link>
        {/* <p>{desc}</p> */}
      </div>
    </ReactCSSTransitionGroup>
    )
  }
}
