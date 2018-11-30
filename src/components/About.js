import React, { Component } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col
} from "reactstrap";
import Countdown from "react-countdown-now";

import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";

import "./About.css";

const items = [
  {
    src: image1,
    altText: "Slide 1",
    caption: "Temukan barang yang ingin kamu sewa"
  },
  {
    src: image2,
    altText: "Slide 2",
    caption: "Sewa barang yang kamu inginkan"
  },
  {
    src: image3,
    altText: "Slide 3",
    caption: "Kembalikan barang yang kamu sewa sesuai waktu yang di tentukan"
  }
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img
            src={item.src}
            alt={item.altText}
            style={{
              width: "50%",
              display: "block",
              margin: "0 auto",
              paddingTop: "10%"
            }}
          />
          <CarouselCaption captionHeader={item.caption} captionText="" />
        </CarouselItem>
      );
    });
    const textStyle = {
      fontSize: "1.5rem",
      color: "#A00702"
    };
    const containerStyle = {
      marginTop: "10%",
      marginBottom: "5%"
    };
    const dueDate = new Date("2019-02-15")
    const counterStyle = {
        fontSize: "2rem",
        marginTop: "30%"
    }
    const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
        return (
            <div>
               <Container>
                <Row>
                <Col>{days}</Col>
                <Col>{hours}</Col>
                <Col>{minutes}</Col>
                <Col>{seconds}</Col>
                </Row>
                <Row>
                <Col>Days</Col>
                <Col>Hours</Col>
                <Col>minutes</Col>
                <Col>seconds</Col>
                </Row>
               </Container>
            </div>
        );
    }
    return (
      <div>
        <Container style={containerStyle}>
          <Row>
            <Col xs={6}>
              <Row>
                <p style={textStyle} className="font-italic">
                  Rentokar adalah aplikasi sewa menyewa model marketplace untuk
                  memenuhi kebutuhan anda
                </p>
                <p style={textStyle} className="sales_text">
                  "KALO BOLEH PINJEM, NGAPAIN BELI!!"
                </p>
              </Row>
              <Row style={counterStyle}>
                <Countdown  
                date={dueDate} 
                renderer={renderer}
                />
              </Row>
            </Col>
            <Col xs={6} style={{ background: "#A00702" }}>
              <style>
                {`.custom-tag {
                  max-width: 100%;
                  height: 500px;
                }`}
              </style>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
