import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { InputGroup, Form, Button, Input } from 'reactstrap';

class Login extends Component {
  render() {
    return (
    <div>
    <Menu />
      <Form className="Form">
        <h1> Voluntarize </h1>
        <InputGroup className="Input">
          <Input placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup className="Input">
          <Input placeholder="yourpassword" />
        </InputGroup>
        <Button id="login" color="primary">Login</Button>
      </Form>
      <Footer />
    </div>
  );
}
}

export default Login;

