import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Form, Button, Input } from 'reactstrap';


class LoginForm extends Component {
  render() {
    return (
      <div className="LoginFormContainer">
        <h1>Voluntarize</h1>
        <Form className="LoginForm">
          <Input className="LoginFormInput" placeholder="Email" />
          <Input className="LoginFormInput" placeholder="Senha" />
        </Form>
        <Button color="primary" onClick={this.props.onLogin}>Entrar</Button>
      </div>
    )
  }
}

class Login extends Component {
  render() {
    return (
      <div className="FullScreenDiv">
        <Menu />
        <LoginForm onLogin={() => {
          this.props.history.push('/perfil')
        }}/>
        <Footer />
    </div>
  );
}
}

export default Login;

