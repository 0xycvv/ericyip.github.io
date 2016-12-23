// @flow
import React from 'react';
import './About.css';

export default class About extends React.Component {
  render() {
    const heart = <span className="hearts">&hearts;</span>
    return (
      <div className="about">
        <p>Hi, I'm Eric a Hong Kong <s>dreamer</s> currently living in Taipei City.</p>
        <br/>
        <p>I studied Political Science and graduated from NTU.</p>
        <p>My first job is in-house Marketing and PR. I started to learn coding at that time.</p>
        <br/>
        <p>Former Front End Developer at SkyREC.</p>
        <p><span>Music Lover from </span>
        <a href="http://www.facebook.com/zenegeist" className="about-link">
            Zenegeist HK
          </a>.</p>
        <p>I {heart} Design+Development. Creating unique visual and user experience.</p>
        <br/>
        <p>Business inquiries

        </p>
        <a href="mailto:ericv0430@gmail.com" className="about-link">
          ericv0430@gmail.com
        </a>
      </div>
    );
  }
}
