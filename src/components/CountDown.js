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
      alignItems: "center"
    }

    // const timeStyle = {
    //   border: "solid black 1px"
    // };

    // const renderer = ({
    //   total,
    //   days,
    //   hours,
    //   minutes,
    //   seconds,
    //   milliseconds,
    //   completed
    // }) => {
    //   return (
    //     <div>
    //       <Container>
    //         <Row style={timeStyle}>
    //           <Col>{days}</Col>
    //           <Col>{hours}</Col>
    //           <Col>{minutes}</Col>
    //           <Col>{seconds}</Col>
    //         </Row>
    //         <Row>
    //           <Col>Days</Col>
    //           <Col>Hours</Col>
    //           <Col>minutes</Col>
    //           <Col>seconds</Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   );
    // };

    const upperStyle = {
      border: "solid grey 1px",
      borderRadius: "10px",
      background: "grey",
      color: "white",
      textAlign: "center",
      margin: "0 auto",
      marginBottom: "20%",
      padding: "5px"
    }

    const lowerStyle = {
      border: "solid red 1px",
      borderRadius: "10px",
      background: "red",
      color: "white",
      textAlign: "center",
      alignItems: "center",
      fontSize: "1rem",
      margin: "0 auto",
      marginBottom: "10%",
      padding: "5px"
    }

    const rendererOption1 = ({ days, hours, minutes, seconds }) => {
      return (
        <Container style={containerStyle}>
          <Row>
            <Col xs={3}>
              <Row style={upperStyle}>
                {days}
              </Row>
              <Row style={lowerStyle}>
                <p>Days</p>
              </Row>
            </Col>
            <Col xs={3}>
              <Row style={upperStyle}>
                {hours}
              </Row>
              <Row style={lowerStyle}>
                <p>Hours</p>
              </Row>
            </Col>
            <Col xs={3}>
              <Row style={upperStyle}>
                {minutes}
              </Row>
              <Row style={lowerStyle}>
                <p>Minutes</p>
              </Row>
            </Col>
            <Col xs={3}>
              <Row style={upperStyle}>
                {seconds}
              </Row>
              <Row style={lowerStyle}>
                <p>Seconds</p>
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
