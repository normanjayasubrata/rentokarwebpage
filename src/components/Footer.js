import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export class Footer extends Component {
  render() {
    const footerStyle = {
      background: "grey",
      color: "white",
      height: "100%",
      padding: "1%",
      textAlign: "center",
      fontSize: "0.8rem",
      fontStyle: "italic",
      fontWeight: "bold"
    };
    return (
      <div style={footerStyle}>
        <Container>
          <Row>
            <Col>
              <p>copyright {"\u00A9"} Rentokar</p>
            </Col>
            <Col>
              <p>Member Of Anak Bahagia Group</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
