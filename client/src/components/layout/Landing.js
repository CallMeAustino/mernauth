import React, { Component } from "react";
import { Link, Router, Redirect } from "react-router-dom";
import CountUp from 'react-countup';
import './Landing.css';

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      videoURL: 'http://techslides.com/demos/sample-videos/small.mp4'
    }
    // this.wanderers = null;
    // this.count = null;
  }
  updateCount() {
    // const target = +document.querySelector('#counter').getAttribute('data-target');
    // if (+document.querySelector('#counter').innerHTML < target){
    //   let int = +document.querySelector('#counter').innerText + 1000;
    //   document.querySelector('#counter').innerText = parseInt(int);
    //   this.setState({
    //     wanderers: +document.querySelector('#counter').innerHTML + 10
    //   })
    // } else {
    //   return;
    // }
  }
  componentDidUpdate(){
  }

  componentDidMount () {
  }
  render() {
    if (localStorage.jwtToken) {
      return (
        <Redirect to="/dashboard"/>
      )
    } else {
      return (
        <div>
          <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
          </video>
          <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Login</b> to submit your own stupid ideas.{" "}
              <CountUp end={1384312} duration={10} separator={","}/> worthless robots submitted.
            </h4>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
            </div>
            </div>
          </div>
        </div>
    );
  }}
}
export default Landing;