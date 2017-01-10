//@flow
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Img2 from './../../../img/med.gif';
import Img1 from './../../../img/med1.png';
import Img3 from './../../../img/med2.gif';

export default class Med extends React.Component {
    render() {
      const { data } = this.props.route
      const { title } = data
      const { tech } = data
      const { type } = data

      function JSXForm(data){
        return data.map((t, i) =>
        <span className="label type-label" key={i}>{t}</span>)
      }

      const typeList = JSXForm(type);
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
              <div className="label-bar">{typeList}
                <div className="techLabel">
                  <span className="label framer">Framer</span>
                  <span className="sketch label">Sketch</span>
                </div>
              </div>

            <div className="project-img">
              <img src={Img1} alt=""/>
            </div>

            <div>
              <img src={Img2} alt=""/>
            </div>
            <div>
              <img src={Img3} alt=""/>
            </div>
          </div>
    </ReactCSSTransitionGroup>
    )
  }
}
