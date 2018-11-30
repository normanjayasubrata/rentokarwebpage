import React, { Component } from "react";
// import { Player, ControlBar } from "video-react";
import { Media } from "reactstrap";

import videoTeaser from "../assets/videos/teaser_rentokar.mp4";
import rentoLogo from "../assets/images/rentokar_logo_max_white.png";

class VideoTeaser extends Component {
  constructor() {
    super();
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  };

  render() {
    // const playVideo = (
    //     <Player
    //     autoPlay={true}
    //     fluid={false}
    //     src={videoTeaser}
    //     height={this.state.windowWidth/2-10}
    //     aspectRatio="16:9"
    //   />
    // )

    const videoStyle = {
      width: "70%",
      display: "block",
      margin: "0 auto",
        marginTop: "5%",
        marginBottom: "20%",
        border: "solid #A00702 15px",
        borderRadius: "15px"
    };


    const otherVideo = (
      <video loop autoPlay style={videoStyle} controls>
        <source src={videoTeaser} type="video/mp4" />
      </video>
    );

    const containerStyle = {
        paddingTop: "10%",
      background: "#FF0B03",
      marginTop: "20px",
    //   marginBottom: "20px",
      //   height: "500px",
      width: "100%"
    };

    const imageStyle = {
       
        display: "block",
      margin: "0 auto",
    //   marginTop: "100px",
      width: "20%"
    }


    return (
      <div style={containerStyle}>
      <img src={rentoLogo} alt="" style={imageStyle}/>
      <Media>
            <Media middle>{otherVideo}</Media>
            </Media>
      </div>
    );
  }
}

export default VideoTeaser;
