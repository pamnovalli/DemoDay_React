import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { InputGroup, Form, Button, Input } from 'reactstrap';


class LoginForm extends Component {
  render() {
    return (
      <div className="LoginFormContainer">
        <h1>Voluntarize</h1>
        <Form className="LoginForm">
          <Input className="LoginFormInput" placeholder="Email" />
          <Input className="LoginFormInput" placeholder="Senha" />
        </Form>
        <Button id="login" color="primary">Entrar</Button>
      </div>
    )
  }
}

class Login extends Component {
  render() {
    return (
      <div className="FullScreenDiv">
        <Menu />
        <LoginForm />
        <Footer />
    </div>
  );
}
}

export default Login;

