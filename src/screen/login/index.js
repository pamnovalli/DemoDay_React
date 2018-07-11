import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { InputGroup, Form, Button, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <div>
       <br />
       <br />
       <br />
       <br />
      <Menu />
      <Form className="form">
      <h1> Voluntarize </h1>
      <InputGroup className="input">
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup className="input">
        <Input placeholder="yourpassword" />
      </InputGroup>
      <Button color="primary">Login</Button>
      </Form>
      <br />
      <Footer />
    </div>
  );
};

export default Login;