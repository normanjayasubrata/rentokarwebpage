import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import rentoLogo from "../assets/images/rentokar_logo_min.jpeg";
import rentokarBrand from "../assets/images/rentokar_logo_max_red.png";

class NavHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      windowScroll: window.scrollY
    };
  }
  componentWillMount = () => {
    window.addEventListener("scroll", this.handleWindowScroll);
  };

  componentWillMount = () => {
    window.addEventListener("scroll", this.handleWindowScroll);
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleWindowScroll = () => {
    this.setState({ windowScroll: window.scrollY });
  };

  render() {
    const navStyle = {
      paddingLeft: "10%",
      paddingRight: "15%",
      // background: "grey",
      height: "70px",
      borderBottom: "solid black 1px",
      transition: "linear 0.3s"
    };

    const homeStyle = {
      color: "red"
    };

    const brandStyle = {
      display: "block",
      margin: "0 auto",
      marginTop: "20%"
    };

    const afterScroll = (
      <Navbar style={navStyle} color="white" light expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src={rentoLogo} alt="rentokar logo" width="62" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="font-weight-bold">
              <NavLink href="/components/">
                <h3 style={homeStyle}>RENTOKAR</h3>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );

    const beforeScroll = (
      <Navbar>
        <img
          style={brandStyle}
          src={rentokarBrand}
          alt="rentokar logo"
          width="50%"
        />
      </Navbar>
    );
    return (
      <div>{this.state.windowScroll > 100? afterScroll : beforeScroll}</div>
    );
  }
}

export default NavHeader;
