//@flow
import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Footer.css';
import wave from '../../../img/wave1.svg'

export default class Footer extends React.Component{
  render(){
    const icon =
    <div className="icons">
      <FontAwesome
        className="icon"
        name="github"
        size="2x"
      />
      <FontAwesome
        className="icon"
        name="twitter"
        size="2x"
      />
      <FontAwesome
        className="icon"
        name="envelope-o"
        size="2x"
      />
    </div>
    return (
      <footer className="footer">
        <img src={wave} className="footer-wave" alt="wave"/>
        <p>Copyright &copy; Eric Yip</p>
          {icon}
      </footer>
    )
  }
}
