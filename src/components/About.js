import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import Slider from "./RentoSlider";
import CountDown from "./CountDown";

import "./About.css";

class About extends Component {
  render() {
    const textStyle = {
      fontSize: "1.5rem",
      color: "#A00702"
    };

    const containerStyle = {
      marginTop: "10%",
      marginBottom: "5%"
    };
    return (
      <div>
        <Container style={containerStyle}>
          <Row>
            <Col lg={6}>
              <Row>
                <p style={textStyle} className="font-italic">
                  Rentokar adalah aplikasi sewa menyewa model marketplace untuk
                  memenuhi kebutuhan anda
                </p>
                <p style={textStyle} className="sales_text">
                  "KALO BOLEH PINJEM, NGAPAIN BELI!!"
                </p>
              </Row>
              <Row>
                <CountDown />
              </Row>
            </Col>
            <Col lg={6} sm={12} md={12}>
              <Slider />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
