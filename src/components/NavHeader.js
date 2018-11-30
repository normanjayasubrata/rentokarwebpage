import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import rentoLogo from '../assets/images/rentokar_logo_min.jpeg'

class NavHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const navStyle = {
      paddingLeft: "10%",
      paddingRight: "15%"
    }

    const homeStyle = {
      color: "red"
    }
    return (
      <div>
        <Navbar style={navStyle} color="white" light expand="md" fixed="top">
          <NavbarBrand href="/">
            <img src={rentoLogo} alt="rentokar logo" width="62"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="font-weight-bold">
                <NavLink href="/components/"><h3 style={homeStyle}>RENTOKAR</h3></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavHeader;
