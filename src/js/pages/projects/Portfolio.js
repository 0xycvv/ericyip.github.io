//@flow
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Img from './../../../img/portfolio.jpg';
// import Img2 from './../../img/02.jpg';
// import Img3 from './../../img/03.jpg';
// import Img4 from './../../img/04.jpg';

export default class Portfolio extends React.Component {
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
                  <span className="label react">React</span>
                  <span className="js label">Js</span>
                </div>
              </div>

            <div className="project-img">
              <img src={Img} alt=""/>
            </div>

          </div>
    </ReactCSSTransitionGroup>
    )
  }
}
