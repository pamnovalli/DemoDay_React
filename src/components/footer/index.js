import React, { Component } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Contatos</NavbarBrand>
            <Nav className="mx-auto">
              <NavItem>
                <NavLink href="/">Gmail</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Facebook</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}