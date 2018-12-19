import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";

class PromoteSlider extends Component {
  render() {
    const legendStyle = {
      fontSize: "1rem",
      color: "white",
      fontStyle: "bold",
      opacity: "1",
      // zIndex: "-1"
      background: "rgba(0, 0, 0, 0.5)"
    }
    return (
      <div>
        <Carousel 
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        >
          <div>
            <img src={image1} alt="image1" />
            <p className="legend" style={legendStyle}>Temukan barang uang ingin kamu sewa</p>
          </div>
          <div>
            <img src={image2} alt="image2" />
            <p className="legend" style={legendStyle}>Sewa barang yang kamu inginkan</p>
          </div>
          <div>
            <img src={image3} alt="image3" />
            <p className="legend" style={legendStyle}>Kembalikan barang yang kamu sewa tepat waktu</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default PromoteSlider;
