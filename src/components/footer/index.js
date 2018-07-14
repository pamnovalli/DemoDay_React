import React, { Component } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  CardImg,
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
              <NavItem className="Sociais">
              <img height="35" width="35" src='https://cdn.icon-icons.com/icons2/535/PNG/128/Email-Icon_icon-icons.com_52870.png' />
                <NavLink href="/">Gmail</NavLink>
              </NavItem>
              <NavItem className="Sociais">
              <img height="35" width="35" src='https://cdn.icon-icons.com/icons2/555/PNG/128/facebook_icon-icons.com_53612.png' />
                <NavLink href="/">Facebook</NavLink>
              </NavItem>
              <NavItem className="Sociais">
              <img height="35" width="35" src='https://cdn.icon-icons.com/icons2/836/PNG/128/Instagram_icon-icons.com_66804.png' />
                <NavLink href="/">Instagram</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}