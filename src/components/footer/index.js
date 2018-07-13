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
        <Navbar color="light" light expand="md" fixed={`bottom`}>
          <NavbarBrand href="/">Contatos</NavbarBrand>
            <Nav className="mx-auto">
              <NavItem className="Sociais">
                <CardImg top width="100%" src="ehdemoday\EHDemoDay\imagens\iconeemail.png" alt="Card image cap" />
                <NavLink href="/">Gmail</NavLink>
              </NavItem>
              <NavItem className="Sociais">
                <CardImg top width="100%" src="ehdemoday\EHDemoDay\imagens\Iconefacebook (1).png" alt="Card image cap" />
                <NavLink href="/">Facebook</NavLink>
              </NavItem>
              <NavItem className="Sociais">
                <CardImg top width="100%" src="ehdemoday\EHDemoDay\imagens\Iconeinstagram.png" alt="Card image cap" />
                <NavLink href="/">Instagram</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}