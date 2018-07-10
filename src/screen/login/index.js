import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <div>
       <br />
       <br />
       <br />
       <br />
      <Menu />
      <InputGroup>
        <Input placeholder="yourpassword" />
        <InputGroupAddon addonType="append">12345@oi</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <Footer />
    </div>
  );
};

export default Login;