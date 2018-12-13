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
    };

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
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      background: "grey",
      color: "white",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };

    const lowerStyle = {
      border: "solid red 1px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      background: "red",
      color: "white",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    };
    

    const rendererOption1 = ({ days, hours, minutes, seconds }) => {
      return (
        <Container style={containerStyle}>
          <Row>
            <Col xs="3" size="auto">
              <Row style={upperStyle}>
                {/* <Button color="danger" disabled> */}
                  {days}
                {/* </Button> */}
              </Row>
              <Row style={lowerStyle}>
                {/* <Button outline color="danger" disabled> */}
                  Days
                {/* </Button> */}
              </Row>
            </Col>
            <Col xs="3" size="auto">
              <Row style={upperStyle}>
                {/* <Button color="danger" disabled> */}
                  {hours}
                {/* </Button> */}
              </Row>
              <Row style={lowerStyle}>
                {/* <Button outline color="danger" disabled> */}
                  Hours
                {/* </Button> */}
              </Row>
            </Col>
            <Col xs="3" size="auto">
              <Row style={upperStyle}>
                {/* <Button color="danger" disabled> */}
                  {minutes}
                {/* </Button> */}
              </Row>
              <Row style={lowerStyle}>
                {/* <Button outline color="danger" disabled> */}
                  Minutes
                {/* </Button> */}
              </Row>
            </Col>
            <Col xs="3" size="auto">
              <Row style={upperStyle}>
                {/* <Button color="danger" disabled> */}
                  {seconds}
                {/* </Button> */}
              </Row>
              <Row style={lowerStyle}>
                {/* <Button outline color="danger" disabled> */}
                  Seconds
                {/* </Button> */}
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
