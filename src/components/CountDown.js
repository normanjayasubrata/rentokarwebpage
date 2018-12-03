import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Countdown from "react-countdown-now";

export class CountDown extends Component {
  render() {


    const dueDate = new Date("2019-02-15");
    const counterStyle = {
      fontSize: "2rem",
      marginTop: "30%"
    };
    const renderer = ({
      total,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
      completed
    }) => {
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
    };
    return (
      <div style={counterStyle}>
        <Countdown date={dueDate} renderer={renderer} />
      </div>
    );
  }
}

export default CountDown;
