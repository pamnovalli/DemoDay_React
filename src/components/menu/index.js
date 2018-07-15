import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollchor from 'react-scrollchor';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Menu extends React.Component {
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
    return (
      <div>
        <Navbar color="light" light sticky-top expand="md" fixed={`top`}>
        <NavbarBrand href="/">Voluntarize</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Scrollchor to="#project" className="nav-link">O projeto</Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="#about" className="nav-link">Quem Somos</Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="#cadastrarong" className="nav-link">Cadastrar ONGS</Scrollchor>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="login">Entrar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="cadastro">Criar conta</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}