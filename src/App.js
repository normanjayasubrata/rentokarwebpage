import React, { Component } from "react";
import Navheader from "./components/NavHeader";
import VideoTeaser from "./components/VideoTeaser";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navheader />
        <About />
        <VideoTeaser />
        <Footer />
      </div>
    );
  }
}

export default App;
