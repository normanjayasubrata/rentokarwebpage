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

    const containerStyle = {
      textAlign: "center"
    }

    const timeStyle = {
      border: "solid black 1px"
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
            <Row style={timeStyle}>
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

    const rendererOption1 = ({ days, hours, minutes, seconds }) => {
      return (
        <Container style={containerStyle}>
          <Row>
            <Col>
              <Row>
                {days}
              </Row>
              <Row>
                <h4>Days</h4>
              </Row>
            </Col>
            <Col>
              <Row>
                {hours}
              </Row>
              <Row>
                <h4>Hours</h4>
              </Row>
            </Col>
            <Col>
              <Row>
                {minutes}
              </Row>
              <Row>
                <h4>Minutes</h4>
              </Row>
            </Col>
            <Col>
              <Row>
                {seconds}
              </Row>
              <Row>
                <h4>Seconds</h4>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    };
    return (
      <div style={counterStyle}>
        <Countdown date={dueDate} renderer={rendererOption1} />
      </div>
    );
  }
}

export default CountDown;
